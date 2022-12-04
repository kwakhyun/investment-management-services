import AccountsService from '@services/AccountService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Account } from 'src/types/account';
import { useEffect, useState } from 'react';
import useEdit from './useEdit';
import useParseAccountData from './useParseAccountData';

function useAccountNameEdit(inputRef: React.RefObject<HTMLInputElement>, account: Account) {
  const [accountData, setAccountData] = useState(account);
  const { isEditMode, handleEditClick, handleEditCancle } = useEdit();
  const queryClient = useQueryClient();
  const { mutate } = useMutation((data: { name: string }) => AccountsService.patchAccount(account.uuid, data), {
    onSuccess: (data) => {
      setAccountData(data);
      queryClient.invalidateQueries(['accounts']);
    },
  });
  const parsedAccount = useParseAccountData({ account: accountData });

  const handleSubmitClick = () => {
    if (inputRef.current) mutate({ name: inputRef.current.value });
    handleEditCancle();
  };

  useEffect(() => {
    if (isEditMode && inputRef.current) inputRef.current.focus();
  }, [isEditMode]);

  return { isEditMode, handleEditClick, handleEditCancle, handleSubmitClick, parsedAccount };
}

export default useAccountNameEdit;
