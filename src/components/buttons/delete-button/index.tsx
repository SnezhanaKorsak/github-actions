import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledDeleteButton } from '@/components/buttons/delete-button/styled';
import { RoutesPath } from '@/constants/routes-path';
import { deleteCategory } from '@/store/task-categories/slice';

type Props = {
  category: string;
};

export const DeleteButton = ({ category }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteCategory({ category }));
    navigate(RoutesPath.TaskBoard);
  };

  return (
    <StyledDeleteButton onClick={handleClick} title="All data will be deleted">
      <FontAwesomeIcon icon={faTrash} />
    </StyledDeleteButton>
  );
};
