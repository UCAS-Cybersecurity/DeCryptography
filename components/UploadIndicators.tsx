import { useUpload } from "../context/UploadContext";

export default function UploadIndicators() {
  const uploadCtx = useUpload();
  return (
    <div className="fixed bottom-10 left-3 block ">
      {uploadCtx?.uploads.map((upload) => (
        <div key={upload.label} className="m-5">
          <div
            className="relative bg-gradient-to-r from-blue to-green rounded-lg w-80 py-5 px-6 mb-4 text-base text-white font-bold transition-all overflow-hidden"
            role="alert"
          >
            Uploading: {upload.label}
            <div className="w-full rounded-full h-2.5 absolute bottom-0 left-0">
              <div
                className="bg-white h-2.5"
                style={{ width: `${upload.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
