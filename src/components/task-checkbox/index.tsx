import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useState,
} from 'react';
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
  StyledWrapper,
} from '@/components/task-checkbox/styled';
import { Task } from '@/types/index';

type Props = {
  items: Task[];
  deleteTask?: (id: string) => void;
  changeTaskName?: (newTaskName: string, taskId: string) => void;
  changeTaskStatus?: (newTaskStatus: boolean, taskId: string) => void;
};

export const TaskCheckbox: React.FC<Props> = ({
  items,
  deleteTask,
  changeTaskName,
  changeTaskStatus,
}) => {
  const [editMode, setEditMode] = useState(false);

  const deleteTaskHandler = (id: string) => deleteTask && deleteTask(id);

  const onEditMode = () => setEditMode(true);

  const offEditMode = () => setEditMode(false);

  const onKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      offEditMode();
    }
  };

  const onChangeTaskNameHandler = useCallback(
    (id: string) => (newTaskName: string) => {
      if (changeTaskName) {
        changeTaskName(newTaskName, id);
      }
    },
    [changeTaskName],
  );

  const onChangeTaskStatusHandler = (
    event: ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    if (changeTaskStatus) {
      changeTaskStatus(event.target.checked, id);
    }
  };

  const itemsList = items.map(({ id, name }) => {
    return (
      <StyledCheckboxContainer key={id}>
        <StyledInput
          id={id}
          type="checkbox"
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
            name
          )}
        </StyledLabel>
        {!editMode && (
          <StyledIconContainer>
            <StyledButton onClick={onEditMode}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </StyledButton>

            <StyledButton onClick={() => deleteTaskHandler(id)}>
              <FontAwesomeIcon icon={faTrash} />
            </StyledButton>
          </StyledIconContainer>
        )}
      </StyledCheckboxContainer>
    );
  });

  return <StyledWrapper>{itemsList}</StyledWrapper>;
};
