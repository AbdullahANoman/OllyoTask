import React from "react";

interface SelectAndDeleteFileProps {
  selectedImages: number[];
  deleteImages: () => void;
}

const SelectAndDeleteFile: React.FC<SelectAndDeleteFileProps> = ({
  selectedImages,
  deleteImages,
}) => {
  return (
    <div className="flex justify-between p-5 shadow-sm items-center border-b-2">
      {selectedImages.length ? (
        <div className="flex gap-2 items-center text-xl">
          <div>
            <input
              type="checkbox"
              name=""
              checked
              id=""
              className="w-full h-full"
            />
          </div>
          <h5 className="font-bold">{selectedImages.length} Files selected</h5>
        </div>
      ) : (
        <h2 className="font-bold text-2xl">Gallery</h2>
      )}
      {selectedImages.length > 0 && (
        <button
          onClick={deleteImages}
          className="text-xl text-red-600 border-b-2 border-b-red-400"
        >
          Delete files
        </button>
      )}
    </div>
  );
};

export default SelectAndDeleteFile;
