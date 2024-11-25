import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { EditField } from '@/components/edit-field';
import {
  StyledButton,
  StyledCheckboxContainer,
  StyledIconContainer,
  StyledInput,
  StyledLabel,
  StyledText,
} from '@/components/task-item/styled';

type Props = {
  id: string;
  name: string;
  status: boolean;
  deleteTask: (id: string) => void;
  changeTaskName: (newTaskName: string, taskId: string) => void;
  changeTaskStatus: (newTaskStatus: boolean, taskId: string) => void;
};

export const TaskItem = ({
  id,
  name,
  status,
  deleteTask,
  changeTaskName,
  changeTaskStatus,
}: Props) => {
  const [editMode, setEditMode] = useState(false);

  const onEditMode = () => setEditMode(true);
  const offEditMode = () => setEditMode(false);

  const deleteTaskHandler = (id: string) => () => deleteTask(id);

  const onChangeTaskNameHandler = (id: string) => (newTaskName: string) => {
    changeTaskName(newTaskName, id);
  };

  const onChangeTaskStatusHandler = (
    event: ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    changeTaskStatus(event.target.checked, id);
  };

  const onKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      offEditMode();
    }
  };

  return (
    <StyledCheckboxContainer>
      <StyledInput
        id={id}
        type="checkbox"
        checked={status}
        onChange={(event) => onChangeTaskStatusHandler(event, id)}
      />
      <StyledLabel htmlFor={id}>
        {editMode ? (
          <EditField
            value={name}
            offEditMode={offEditMode}
            onKeyUp={onKeyUpHandler}
            changeTaskName={onChangeTaskNameHandler(id)}
          />
        ) : (
          <StyledText status={status}>{name}</StyledText>
        )}
      </StyledLabel>
      {!editMode && (
        <StyledIconContainer>
          <StyledButton onClick={onEditMode}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </StyledButton>

          <StyledButton onClick={deleteTaskHandler(id)}>
            <FontAwesomeIcon icon={faTrash} />
          </StyledButton>
        </StyledIconContainer>
      )}
    </StyledCheckboxContainer>
  );
};
