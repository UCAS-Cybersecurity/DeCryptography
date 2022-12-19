import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useUpload } from "../context/UploadContext";
import { storage } from "../firebase";

export default function useUploadHelpers() {
  const indicators = useUpload();
  async function uploadImage(options: {
    file?: File;
    label: string;
    onDone?: Function;
    onError?: Function;
    onProgress?: Function;
    path: any;
  }) {
    const {
      label,
      file,
      path,
      onDone = () => {},
      onError = () => {},
      onProgress = () => {},
    } = options;
    if (!file) return true;
    let url = "";
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, file);
    indicators?.addUpload({ label, progress: 0, size: file.size });
    await uploadTask.on(
      "state_changed",
      (snapshot) => {
        indicators?.updateUpload({
          label,
          progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          size: file.size,
        });
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        onProgress(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error);
        onError(error);
        indicators?.removeUpload({
          label,
          progress: 100,
          size: file.size,
        });
      },
      async () => {
        try {
          url = await getDownloadURL(uploadTask.snapshot.ref);
          onDone(url);
          indicators?.updateUpload({
            label,
            progress: 100,
            size: file.size,
          });
        } catch (error) {
          console.log(error);
          onError(error);
        }
      }
    );
    return false;
  }
  return { uploadImage };
}
