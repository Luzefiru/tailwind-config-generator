import { useState, useEffect } from 'react';
import ImageIcon from '../assets/panorama.svg';
import { toast } from 'react-toastify';
import { isValidTailwindClass } from '../utils/isValidTailwindClass';

interface PropTypes {
  className: string;
  handleClose: () => void;
  editColor: (oldName: string, newName: string, newValue: string) => void;
  oldName: string;
  oldValue: string;
}

export default function EditColorDialog({
  className,
  handleClose,
  editColor,
  oldName,
  oldValue,
}: PropTypes) {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [newName, setNewName] = useState<string>('');
  const [newValue, setNewValue] = useState<string>('');

  useEffect(() => {
    setNewName(oldName);
    setNewValue(oldValue);
  }, [oldName, oldValue]);

  const onImageChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  const reverseChanges = () => {
    setNewName(oldName);
    setNewValue(oldValue);
  };

  const handleCancel = () => {
    reverseChanges();
    handleClose();
  };

  const handleColorChange = (e: any) => {
    setNewValue(e.target.value);
  };

  const handleSubmit = () => {
    // catcher for invalid tailwind class names
    if (!isValidTailwindClass(newName)) {
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

    editColor(oldName, newName, newValue);
    toast.success(`Edited ${newName}`, {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    handleClose();
  };

  const handleTextChange = (e: any) => {
    setNewName(e.target.value);
  };

  return (
    <>
      <div
        onClick={handleClose}
        className={`cover bg-zinc-700 opacity-40 ${className}`}
      />
      <section className={`dialog fade-in ${className}`}>
        <div className="flex flex-col p-6 rounded-lg bg-neutral-100 relative w-[80vw] -ml-[40vw] h-[80vh] -mt-[40vh] lg:w-[40vw] lg:-ml-[20vw]">
          <pre className="flex items-center mb-2">
            <div className="relative w-full">
              <input
                aria-label="Edit Color Name"
                onChange={handleTextChange}
                className="span w-full pl-[36px] rounded-lg text-2xl font-semibold bg-transparent"
                type="text"
                value={newName}
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
          <div className="overflow-hidden flex-grow mb-4 bg-white shadow-sm rounded-lg flex items-center justify-center">
            <img
              className="rounded-xl object-contain p-2"
              alt="Your Upload"
              src={image ? image : ImageIcon}
            />
          </div>
          <div className="p-4 bg-white shadow-sm rounded-lg flex flex-col gap-4  sm:flex-row sm:gap-0 items-center justify-between">
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
              className="h-14 w-14 rounded-full cursor-pointer"
              type="color"
              value={newValue}
              onChange={handleColorChange}
            />
          </div>
          <div aria-label="Buttons" className="flex gap-4 pt-4 justify-end">
            <button
              onClick={handleCancel}
              className="flex items-center gap-1 text-[0.7rem] sm:text-base shadow-sm border-2 pl-3 pr-4 py-[0.4rem] rounded-md font-medium transition-colors border-red-600 text-red-600 hover:bg-red-700 hover:border-red-700 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                viewBox="0 96 960 960"
              >
                <path
                  fill="currentColor"
                  d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"
                />
              </svg>
              Delete
            </button>
            <button
              onClick={handleSubmit}
              className="text-[0.7rem] sm:text-base shadow-sm border-2 px-5 py-[0.4rem] rounded-md font-medium transition-colors border-emerald-500 text-white bg-emerald-500 hover:bg-emerald-700 hover:border-emerald-700"
            >
              Confirm
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
