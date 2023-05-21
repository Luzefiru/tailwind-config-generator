import { useState, useRef } from 'react';

interface PropTypes {
  name: string;
  value: string;
}

export default function ColorCard({ name, value }: PropTypes) {
  const [isFocused, setIsFocused] = useState(false);
  const ColorCardText = useRef(null);

  return (
    <div
      tabIndex={0}
      className="bg-white w-full rounded-md shadow-sm hover:shadow-md focus:shadow-lg hover:scale-105 focus:scale-105 transition cursor-pointer relative"
      onFocus={() => {
        setIsFocused(!isFocused);
      }}
      onBlur={() => {
        setIsFocused(!isFocused);
      }}
    >
      <div
        aria-label={isFocused ? value : name}
        style={{ backgroundColor: value }}
        className="h-16 w-full rounded"
      ></div>
      <div
        ref={ColorCardText}
        className="text-[2.5vw] -bottom-[1.115rem] md:text-[0.75rem] md:-bottom-[1.5rem] font-medium text-neutral-700 min-w-full whitespace-nowrap absolute  text-center cursor-text"
      >
        <code>{isFocused ? value : name}</code>
      </div>
    </div>
  );
}
