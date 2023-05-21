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

  return (
    <>
      <div
        onClick={handleClose}
        className={`cover bg-zinc-700 opacity-40 ${className}`}
      />
      <div className={`dialog fade-in ${className}`}>
        <div className="flex flex-col p-4 rounded-lg bg-neutral-100 relative w-[80vw] -ml-[40vw] h-[80vh] -mt-[40vh] lg:w-[40vw] lg:-ml-[20vw]">
          <div className="w-full flex justify-end">
            <svg
              onClick={handleClose}
              className="cursor-pointer hover:text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 96 960 960"
              width="48"
            >
              <path
                fill="currentColor"
                d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
              />
            </svg>
          </div>
          <div className="overflow-hidden flex-grow m-4 mb-0 bg-white shadow-sm rounded-lg flex items-center justify-center">
            <img
              className="rounded object-contain p-2"
              alt="Your Upload"
              src={image ? image : ImageIcon}
            />
          </div>
          <div className="m-4 p-4 bg-white shadow-sm rounded-lg flex items-center justify-between">
            <div>
              <h2 className="mb-2 font-semibold">Upload an Image</h2>
              <input className="text-sm" type="file" onChange={onImageChange} />
            </div>
            <input className="h-14 w-14 rounded-full" type="color" />
          </div>
        </div>
      </div>
    </>
  );
}
