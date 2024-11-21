import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import { StyledEditField } from '@/components/edit-field/styled';

type Props = {
  value: string;
  offEditMode: () => void;
  onKeyUp: (event: KeyboardEvent<HTMLInputElement>) => void;
  changeTaskName: (newTaskName: string) => void;
};

export const EditField: React.FC<Props> = ({
  value,
  offEditMode,
  onKeyUp,
  changeTaskName,
}) => {
  const [newTaskName, setNewTaskName] = useState(value);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setNewTaskName(event.target.value);

  const onBlurHandler = () => {
    changeTaskName(newTaskName);
    offEditMode();
  };

  const onKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    changeTaskName(newTaskName);
    onKeyUp(event);
  };

  return (
    <StyledEditField
      value={newTaskName}
      onBlur={onBlurHandler}
      onKeyUp={onKeyUpHandler}
      onChange={onChangeHandler}
    />
  );
};
