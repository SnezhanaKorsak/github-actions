import { useNavigate } from 'react-router-dom';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledCreateTaskButton } from '@/components/buttons/create-task-button/styled';
import { RoutesPath } from '@/constants/routes-path';

export const CreateTaskButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(RoutesPath.CreateTask);
  };

  return (
    <StyledCreateTaskButton
      onClick={handleClick}
      data-testId="create-task-button"
    >
      <FontAwesomeIcon icon={faPlus} />
    </StyledCreateTaskButton>
  );
};
