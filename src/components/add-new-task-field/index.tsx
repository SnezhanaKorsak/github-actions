import { ChangeEvent, KeyboardEvent } from 'react';

import {
  StyledAddTaskButton,
  StyledField,
  StyledInputIconBlock,
  StyledInputWithButton,
} from '@/components/add-new-task-field/styled';

type Props = {
  taskName: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  addTask: () => void;
};

export const AddNewTaskFieldComponent = ({
  taskName,
  addTask,
  onChange,
}: Props) => {
  const onKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <StyledField data-testId="form-task">
      Task:
      <StyledInputIconBlock>
        <StyledInputWithButton
          type="text"
          value={taskName}
          onChange={onChange}
          onKeyUp={onKeyUpHandler}
          data-testId="form-task-input"
        />
        <StyledAddTaskButton onClick={addTask} data-testId="add-task-button">
          +
        </StyledAddTaskButton>
      </StyledInputIconBlock>
    </StyledField>
  );
};
