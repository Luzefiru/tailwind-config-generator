import { useState } from 'react';
import NewColorDialog from './NewColorDialog';

interface PropTypes {
  addColor: (name: string, value: string) => void;
}

export default function NewColorCard({ addColor }: PropTypes) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button
        onClick={toggleVisibility}
        aria-label="Add a Color"
        title="Add a Color"
        tabIndex={0}
        className="w-full rounded-md hover:scale-105 transition cursor-pointer relative"
      >
        <div className="hover:border-zinc-300 hover:text-zinc-300 hover:animate-pulse  transition-colors h-full w-full bg-zinc-100 rounded-md border-[3.5px] border-neutral-200 text-neutral-200 grid place-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
          >
            <path
              fill="currentColor"
              d="M450 856V606H200v-60h250V296h60v250h250v60H510v250h-60Z"
            />
          </svg>
        </div>
      </button>
      <NewColorDialog
        className={isVisible ? 'block' : 'hidden'}
        handleClose={toggleVisibility}
        addColor={addColor}
      />
    </>
  );
}
