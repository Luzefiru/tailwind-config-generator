import { useState } from 'react';
import ImageIcon from '../../assets/panorama.svg';
import { toast } from 'react-toastify';
import { isValidTailwindClass } from '../../utils/isValidTailwindClass';

interface PropTypes {
  className: string;
  handleClose: () => void;
  addColor: (name: string, value: string) => void;
}

export default function NewColorDialog({
  className,
  handleClose,
  addColor,
}: PropTypes) {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [name, setName] = useState<string>('new-color');
  const [color, setColor] = useState<string>('#000000');

  const onImageChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  const setDefault = () => {
    setName('new-color');
    setColor('#000000');
  };

  const handleCancel = () => {
    setDefault();
    handleClose();
  };

  const handleColorChange = (e: any) => {
    setColor(e.target.value);
  };

  const handleSubmit = () => {
    // catcher for invalid tailwind class names
    if (!isValidTailwindClass(name)) {
      toast.error('Invalid class name. Try again.', {
        position: 'bottom-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }

    addColor(name, color);
    toast.success(`Added ${name}`, {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    handleCancel();
  };

  const handleTextChange = (e: any) => {
    setName(e.target.value);
  };

  return (
    <>
      <div
        onClick={handleClose}
        className={`cover bg-zinc-700 z-30 opacity-40 ${className}`}
      />
      <section className={`dialog fade-in z-40 ${className}`}>
        <div className="flex flex-col p-6 rounded-lg bg-neutral-100 relative w-[80vw] -ml-[40vw] h-[80vh] -mt-[40vh] lg:w-[40vw] lg:-ml-[20vw]">
          <pre className="flex items-center mb-2">
            <div className="relative w-full">
              <input
                onChange={handleTextChange}
                className="span w-full pl-[36px] rounded-lg text-2xl font-semibold bg-transparent"
                type="text"
                value={name}
              />
              <svg
                className="absolute left-1 top-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <title>pencil</title>
                <path
                  fill="currentColor"
                  d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
                />
              </svg>
            </div>
          </pre>
          <div className="flex items-center justify-center flex-grow mb-4 overflow-hidden bg-white rounded-lg shadow-sm">
            <img
              className="object-contain p-2 rounded-xl"
              alt="Your Upload"
              src={image ? image : ImageIcon}
            />
          </div>
          <div className="flex flex-col items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-sm sm:flex-row sm:gap-0">
            <div className="flex flex-col items-center sm:block">
              <h2 className="mb-2 font-semibold">Upload an Image</h2>
              <input
                aria-label="Upload a Custom Image"
                className="text-[0.6rem] sm:text-sm sm:w-[80%] cursor-pointer"
                type="file"
                onChange={onImageChange}
              />
            </div>
            <input
              aria-label="Choose a Color"
              className="rounded-full cursor-pointer h-14 w-14"
              type="color"
              value={color}
              onChange={handleColorChange}
            />
          </div>
          <div aria-label="Buttons" className="flex justify-end gap-4 pt-4">
            <button
              onClick={handleCancel}
              className="text-[0.7rem] sm:text-base shadow-sm border-2 px-5 py-[0.4rem] rounded-md font-medium transition-colors border-red-600 text-red-600 hover:bg-red-700 hover:border-red-700 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="text-[0.7rem] sm:text-base shadow-sm border-2 px-5 py-[0.4rem] rounded-md font-medium transition-colors border-emerald-500 text-white bg-emerald-500 hover:bg-emerald-700 hover:border-emerald-700"
            >
              Add Color
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
