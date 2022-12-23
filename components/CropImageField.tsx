import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { CameraIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import Image from "../components/Image";

export default function CropImageField(props: {
  defaultImage: string | null;
  aspectRatio: number | null;
  onFileChange: Function;
}) {
  const { defaultImage, aspectRatio, onFileChange } = props;
  const [cropData, setCropData] = useState(defaultImage);
  const [image, setImage] = useState<string | null>();
  const [cropper, setCropper] = useState<any>();

  function crop(data: any) {
    setCropData(data);
    onFileChange(dataURLtoFile(data, "image.png"));
  }

  function dataURLtoFile(url: string, filename: string) {
    const arr = url.split(",");
    const ch1 = arr[0];
    const mime = ch1?.match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }
  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      crop(cropper.getCroppedCanvas().toDataURL());
    }
  };
  const filePickerRef = useRef<HTMLInputElement>(null);

  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <>
      <input
        type="file"
        accept="image/*.png, image/*.jpg, image/*.jpeg"
        onChange={onChange}
        className="hidden"
        ref={filePickerRef}
      />
      {image ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-900 rounded-t">
                  <h3 className="text-3xl font-semibold">Crop Profile</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setImage(null)}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <Cropper
                    className="w-full rounded-lg"
                    src={image}
                    style={{ height: 400, width: "100%" }}
                    // Cropper.js options
                    aspectRatio={aspectRatio ?? 1 / 1}
                    onInitialized={(instance) => {
                      setCropper(instance);
                    }}
                    guides={false}
                    crop={async (e) => {}}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-900 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setImage(null)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      getCropData();
                      setImage(null);
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div
        className="flex flex-col items-center justify-center w-full h-full rounded bg-gray-200 cursor-pointer overflow-hidden relative"
        onClick={() => filePickerRef.current?.click()}
      >
        <div className="top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-all bg-opacity-50 z-10 absolute bg-slate-500">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <CameraIcon className="h-6 w-6 text-white" />
            <p className="text-white">Click to change</p>
          </div>
        </div>
        <Image
          className="w-full h-full object-cover"
          src={
            cropData != null && cropData != ""
              ? cropData
              : "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
          }
          alt="cropped"
          fill
        />
      </div>
    </>
  );
}
