import { useState } from 'react';

export default function NewColorCard() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <button
      aria-label="Add a Color"
      title="Add a Color"
      tabIndex={0}
      className="w-full rounded-md hover:scale-105 focus:scale-105 transition cursor-pointer relative"
      onFocus={() => {
        setIsFocused(!isFocused);
      }}
      onBlur={() => {
        setIsFocused(!isFocused);
      }}
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
      {/* <div className="text-[2.5vw] -bottom-[1.115rem] md:text-[0.75rem] md:-bottom-[1.5rem] font-medium text-neutral-700 min-w-full whitespace-nowrap absolute  text-center cursor-text">
        <code>{isFocused ? value : name}</code>
      </div> */}
    </button>
  );
}
