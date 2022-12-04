import { useState } from 'react';

function useEdit() {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => setIsEditMode(true);
  const handleEditCancle = () => setIsEditMode(false);

  return { isEditMode, handleEditClick, handleEditCancle };
}

export default useEdit;
