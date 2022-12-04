import { useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import UserService from '@services/UserService';
import { User } from 'src/types/user';
import useEdit from './useEdit';

function useUserNameEdit(
  inputRef: React.RefObject<HTMLInputElement>,
  userData: User,
  setUserData: React.Dispatch<React.SetStateAction<User>>
) {
  const { isEditMode, handleEditClick, handleEditCancle } = useEdit();
  const queryClient = useQueryClient();
  const { mutate } = useMutation((data: { name: string }) => UserService.patchUser(userData.uuid, data), {
    onSuccess: (data) => {
      setUserData(data);
      queryClient.invalidateQueries(['users']);
    },
  });

  const handleSubmitClick = () => {
    if (inputRef.current) mutate({ name: inputRef.current.value });
    handleEditCancle();
  };

  useEffect(() => {
    if (isEditMode && inputRef.current) inputRef.current.focus();
  }, [isEditMode]);

  return { isEditMode, handleEditClick, handleEditCancle, handleSubmitClick };
}

export default useUserNameEdit;
