import hash from '../utils/hash';
import ColorCard from './ui/ColorCard';
import ColorPicker from './ColorPicker';
import EditColorDialog from './EditColorDialog';
import { useState } from 'react';

interface PropTypes {
  colorUtilities: { name: string; value: string }[];
  handleAddColor: (name: string, value: string) => void;
  handleEditColor: (oldName: string, newName: string, newValue: string) => void;
  handleDeleteColor: (nameToDelete: string) => void;
}

export default function Colors({
  colorUtilities,
  handleAddColor,
  handleEditColor,
  handleDeleteColor,
}: PropTypes) {
  const [editDialogIsVisible, setEditDialogIsVisible] = useState(false);
  const [editColorName, setEditColorName] = useState<string>('');
  const [editColorValue, setEditColorValue] = useState<string>('');
  const toggleEditDialogVisibility = () => {
    setEditDialogIsVisible(!editDialogIsVisible);
  };

  const openEditColorDialog = (oldName: string, oldValue: string) => {
    toggleEditDialogVisibility();
    setEditColorName(oldName);
    setEditColorValue(oldValue);
  };

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-y-10 px-4 md:p-0">
      {colorUtilities.map((e) => (
        <ColorCard
          name={e.name}
          value={e.value}
          key={hash(e.name + e.value)}
          openEditColorDialog={openEditColorDialog}
        />
      ))}
      <ColorPicker addColor={handleAddColor} />
      <EditColorDialog
        className={editDialogIsVisible ? 'block' : 'hidden'}
        handleClose={toggleEditDialogVisibility}
        deleteColor={handleDeleteColor}
        editColor={handleEditColor}
        oldName={editColorName}
        oldValue={editColorValue}
      />
    </div>
  );
}
