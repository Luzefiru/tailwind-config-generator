interface PropTypes {
  className: string;
  handleClose: () => void;
}

export default function NewColorDialog({ className, handleClose }: PropTypes) {
  return (
    <>
      <div className={`cover bg-zinc-700 opacity-40 ${className}`} />
      <div className={`dialog fade-in ${className}`}>
        <div className="p-4 rounded-lg bg-zinc-50 relative w-[80vw] -ml-[40vw] h-[80vh] -mt-[40vh] lg:w-[40vw] lg:-ml-[20vw]">
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
          <input type="color" />
        </div>
      </div>
    </>
  );
}
