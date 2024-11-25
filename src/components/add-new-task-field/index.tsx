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
    <StyledField>
      Task:
      <StyledInputIconBlock>
        <StyledInputWithButton
          type="text"
          value={taskName}
          onChange={onChange}
          onKeyUp={onKeyUpHandler}
        />
        <StyledAddTaskButton onClick={addTask}>+</StyledAddTaskButton>
      </StyledInputIconBlock>
    </StyledField>
  );
};
