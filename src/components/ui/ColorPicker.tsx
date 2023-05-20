import { ChromePicker } from 'react-color';
import { useState } from 'react';

interface PropTypes {
  handleClose: React.MouseEventHandler;
}

export default function ColorPicker({ handleClose }: PropTypes) {
  const [color, setColor] = useState('#000');

  return (
    <div className="popover">
      <div className="cover" onClick={handleClose} />
      <ChromePicker
        color={color}
        onChangeComplete={(newColor) => {
          setColor(newColor.hex);
        }}
        onChange={(newColor) => {
          setColor(newColor.hex);
        }}
      />
    </div>
  );
}
