import { useState } from 'react';
import ImageIcon from '../assets/panorama.svg';

interface PropTypes {
  className: string;
  handleClose: () => void;
}

export default function NewColorDialog({ className, handleClose }: PropTypes) {
  const [image, setImage] = useState<string | undefined>(undefined);

  const onImageChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  const handleCancel = () => {
    setImage(undefined);
    handleClose();
  };

  return (
    <>
      <div
        onClick={handleClose}
        className={`cover bg-zinc-700 opacity-40 ${className}`}
      />
      <section className={`dialog fade-in ${className}`}>
        <div className="flex flex-col p-6 rounded-lg bg-neutral-100 relative w-[80vw] -ml-[40vw] h-[80vh] -mt-[40vh] lg:w-[40vw] lg:-ml-[20vw]">
          <div className="overflow-hidden flex-grow mb-4 bg-white shadow-sm rounded-lg flex items-center justify-center">
            <img
              className="rounded object-contain p-2"
              alt="Your Upload"
              src={image ? image : ImageIcon}
            />
          </div>
          <div className="p-4 bg-white shadow-sm rounded-lg flex items-center justify-between">
            <div>
              <h2 className="mb-2 font-semibold">Upload an Image</h2>
              <input
                aria-label="Upload a Custom Image"
                className="text-sm"
                type="file"
                onChange={onImageChange}
              />
            </div>
            <input
              aria-label="Choose a Color"
              className="h-14 w-14 rounded-full"
              type="color"
            />
          </div>
          <div aria-label="Buttons" className="flex gap-4 pt-4 justify-end">
            <button
              onClick={handleCancel}
              className="shadow-sm border-2 px-5 py-[0.4rem] rounded-md font-medium transition-colors border-red-600 text-red-600 hover:bg-red-700 hover:border-red-700 hover:text-white"
            >
              Cancel
            </button>
            <button className="shadow-sm border-2 px-5 py-[0.4rem] rounded-md font-medium transition-colors border-emerald-500 text-white bg-emerald-500 hover:bg-emerald-700 hover:border-emerald-700">
              Add Color
            </button>
          </div>
        </div>
      </section>
    </>
  );
}