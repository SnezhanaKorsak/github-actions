import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledAddTaskButton } from '@/components/buttons/add-task-button/styled';

type Props = {
  addTaskField: () => void;
};

export const AddTaskButton = ({ addTaskField }: Props) => {
  return (
    <StyledAddTaskButton onClick={addTaskField}>
      <FontAwesomeIcon icon={faPlus} />
    </StyledAddTaskButton>
  );
};
