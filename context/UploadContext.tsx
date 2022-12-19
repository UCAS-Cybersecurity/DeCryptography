import React, { useContext, useState } from "react";
import { Upload } from "../types";

export interface UploadContextInterface {
  uploads: Upload[];
  addUpload: (upload: Upload) => void;
  removeUpload: (upload: Upload) => void;
  updateUpload: (upload: Upload) => void;
}

const UploadContext = React.createContext<UploadContextInterface | null>(null);

export function useUpload() {
  return useContext(UploadContext);
}

export function UploadProvider(props: { children: any }) {
  const { children } = props;
  const [uploads, setUploads] = useState<Upload[]>([]);

  function addUpload(upload: Upload) {
    removeUpload(upload);
    setUploads((prevUploads) => {
      return [...prevUploads, upload];
    });
  }

  function removeUpload(upload: Upload) {
    setUploads((prevUploads) => {
      return prevUploads.filter(
        (prevUpload) => prevUpload.label !== upload.label
      );
    });
  }

  function updateUpload(upload: Upload) {
    setUploads((prevUploads) => {
      return prevUploads.map((prevUpload) => {
        if (prevUpload.label === upload.label) {
          return upload;
        }
        return prevUpload;
      });
    });
    setTimeout(() => {
      if (upload.progress === 100) removeUpload(upload);
    }, 1000);
  }

  return (
    <UploadContext.Provider
      value={{
        uploads,
        addUpload,
        removeUpload,
        updateUpload,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
}
