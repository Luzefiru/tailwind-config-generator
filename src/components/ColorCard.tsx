import { useState, useRef } from 'react';

interface PropTypes {
  name: string;
  value: string;
}

export default function ColorCard({ name, value }: PropTypes) {
  const [isShowingValue, setIsShowingValue] = useState(false);
  const ColorCardText = useRef(null);

  return (
    <div className="bg-white w-full rounded-md shadow-sm cursor-pointer relative">
      <div
        style={{ backgroundColor: value }}
        className="h-16 w-full rounded"
        onMouseEnter={(e) => {
          if (e.target !== ColorCardText.current) {
            setIsShowingValue(!isShowingValue);
          }
        }}
        onMouseLeave={(e) => {
          if (e.target !== ColorCardText.current) {
            setIsShowingValue(!isShowingValue);
          }
        }}
      ></div>
      <div
        ref={ColorCardText}
        className="text-[0.75rem] font-medium text-neutral-700 min-w-full whitespace-nowrap absolute -bottom-[1.5rem] text-center cursor-text"
      >
        <code>{isShowingValue ? value : name}</code>
      </div>
    </div>
  );
}
