import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { StyledDoneButton } from '@/components/buttons/done-button/styled';
import { RoutesPath } from '@/constants/routes-path';

type Props = {
  isError: boolean;
  saveTaskToCategory: () => void;
};

export const DoneButton: React.FC<Props> = ({
  isError,
  saveTaskToCategory,
}) => {
  const navigate = useNavigate();
  const successText = 'The task has been successfully created';
  const errorText = 'The field must be filled in';

  const handleClick = () => {
    if (!isError) {
      toast.success(successText);
      saveTaskToCategory();
      navigate(RoutesPath.TaskBoard);
      return;
    }

    toast.error(errorText);
  };

  return <StyledDoneButton onClick={handleClick}>Done</StyledDoneButton>;
};
