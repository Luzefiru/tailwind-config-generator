import { useState, useRef } from 'react';

interface PropTypes {
  name: string;
  value: string;
  key: string;
  openEditColorDialog: (oldName: string, oldValue: string) => void;
}

export default function ColorCard({
  name,
  value,
  openEditColorDialog,
}: PropTypes) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const ColorCardText = useRef(null);

  const editColor = () => {
    openEditColorDialog(name, value);
  };

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  const toggleFocus = () => {
    setIsFocused(!isFocused);
  };

  return (
    <div
      tabIndex={0}
      className="bg-white w-full rounded-md shadow-sm hover:shadow-md focus:shadow-lg hover:scale-105 focus:scale-105 transition cursor-pointer relative"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onFocus={toggleFocus}
      onBlur={toggleFocus}
      onClick={editColor}
    >
      <div
        aria-label={isHovered ? value : name}
        style={{ backgroundColor: value }}
        className="h-16 w-full rounded"
      ></div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        ref={ColorCardText}
        className="h-6 -bottom-4 text-[2.5vw] md:text-[0.75rem] md:-bottom-[1.5rem] font-medium text-neutral-700 min-w-full whitespace-nowrap absolute cursor-text flex items-end justify-center"
      >
        <code>{isHovered || isFocused ? value : name}</code>
      </div>
    </div>
  );
}
