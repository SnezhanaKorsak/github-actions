import { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AddNewTaskFieldComponent } from '@/components/add-new-task-field';
import { DoneButton } from '@/components/buttons/done-button';
import { ExitButton } from '@/components/buttons/exit-button';
import { TaskCheckbox } from '@/components/task-checkbox';
import { useAppDispatch } from '@/hooks/redux';
import {
  StyledContainer,
  StyledField,
  StyledInput,
  StyledInputButtonBlock,
} from '@/pages/create-task-template/styled';
import { createTaskCategory } from '@/store/task-categories/slice';
import { Task } from '@/types/index';
import { filterTaskById, findTaskById } from '@/utils/tasks';

export const CreateTaskTemplate = () => {
  const dispatch = useAppDispatch();

  const [category, setCategory] = useState<string>('');
  const [taskName, setTaskName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const [error, setError] = useState<boolean>(true);

  const onChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setCategory(e.target.value);
  };

  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);

  const onChangeTaskNameInput = (e: ChangeEvent<HTMLInputElement>) =>
    setTaskName(e.target.value);

  const addTask = () => {
    if (!taskName) {
      return;
    }
    const task = {
      id: uuidv4(),
      name: taskName.trim(),
      status: false,
    };
    setTasksList((prevState) => [...prevState, task]);
    setTaskName('');
  };

  const deleteTask = (id: string) => {
    const filteredTask = filterTaskById(tasksList, id);
    setTasksList(filteredTask);
  };

  const changeTaskName = (newTaskName: string, taskId: string) => {
    const foundTask = findTaskById(tasksList, taskId);

    if (foundTask) {
      const editableTask = {
        ...foundTask,
        name: newTaskName,
      };

      setTasksList((prevState) =>
        prevState.map((task) => (task.id === taskId ? editableTask : task)),
      );
    }
  };

  const changeTaskStatus = (newTaskStatus: boolean, taskId: string) => {
    const foundTask = findTaskById(tasksList, taskId);

    if (foundTask) {
      const editableTask = {
        ...foundTask,
        status: newTaskStatus,
      };

      setTasksList((prevState) =>
        prevState.map((task) => (task.id === taskId ? editableTask : task)),
      );
    }
  };

  const checkRequiredField = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setError(true);
    }
  };

  const saveTaskToCategory = () => {
    const taskCategory = {
      category,
      description,
      tasksList,
    };
    dispatch(createTaskCategory(taskCategory));
  };

  return (
    <StyledContainer>
      <StyledField data-testId="form-category">
        Category:
        <StyledInput
          type="text"
          value={category}
          onChange={onChangeCategory}
          onBlur={checkRequiredField}
          error={error}
          data-testId="form-category-input"
        />
      </StyledField>

      <StyledField data-testId="form-description">
        Description:
        <StyledInput
          type="text"
          value={description}
          onChange={onChangeDescription}
          data-testId="form-description-input"
        />
      </StyledField>

      <AddNewTaskFieldComponent
        taskName={taskName}
        onChange={onChangeTaskNameInput}
        addTask={addTask}
      />

      <TaskCheckbox
        items={tasksList}
        deleteTask={deleteTask}
        changeTaskName={changeTaskName}
        changeTaskStatus={changeTaskStatus}
      />

      <StyledInputButtonBlock>
        <DoneButton
          category={category}
          isError={error}
          saveTaskToCategory={saveTaskToCategory}
        />
      </StyledInputButtonBlock>

      <ExitButton />
    </StyledContainer>
  );
};
