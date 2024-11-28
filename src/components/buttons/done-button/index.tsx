import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { StyledDoneButton } from '@/components/buttons/done-button/styled';
import { RoutesPath } from '@/constants/routes-path';
import { useAppSelector } from '@/hooks/redux';
import { categoriesSelector } from '@/store/task-categories/selectors';

type Props = {
  category: string;
  isError: boolean;
  saveTaskToCategory: () => void;
};

export const DoneButton: React.FC<Props> = ({
  category,
  isError,
  saveTaskToCategory,
}) => {
  const navigate = useNavigate();
  const categories = useAppSelector(categoriesSelector);

  const successText = 'The task has been successfully created';
  const errorText = 'The field must be filled in';

  const handleClick = () => {
    if (isError) {
      toast.error(errorText);
      return;
    }

    if (categories.includes(category.toLowerCase())) {
      toast.error('This category already exists');
      return;
    }

    toast.success(successText);
    saveTaskToCategory();
    navigate(RoutesPath.TaskBoard);
  };

  return (
    <StyledDoneButton data-testId="done-button" onClick={handleClick}>
      Done
    </StyledDoneButton>
  );
};
