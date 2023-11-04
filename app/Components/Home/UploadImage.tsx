import React, { ChangeEvent, RefObject } from "react";

interface UploadImageProps {
  setUploadImage: (files: File[]) => void;
  imgRef: RefObject<HTMLInputElement>;
}

const UploadImage: React.FC<UploadImageProps> = ({
  setUploadImage,
  imgRef,
}) => {
  return (
    <>
      <h4>Add images</h4>
      <input
        type="file"
        hidden
        multiple
        accept="image/*"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const files = event.target.files;
          if (files) {
            const filesArr: File[] = Array.from(files);
            setUploadImage(filesArr);
          }
        }}
        ref={imgRef}
      />
    </>
  );
};

export default UploadImage;
