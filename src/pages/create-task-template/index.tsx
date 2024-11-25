import { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AddNewTaskFieldComponent } from '@/components/add-new-task-field';
import { DoneButton } from '@/components/buttons/done-button';
import { ExitButton } from '@/components/buttons/exit-botton';
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
      name: taskName,
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
    const editableTask = findTaskById(tasksList, taskId);
    const filteredTask = filterTaskById(tasksList, taskId);

    if (editableTask) {
      editableTask.name = newTaskName;
      setTasksList([...filteredTask, editableTask]);
    }
  };

  const changeTaskStatus = (newTaskStatus: boolean, taskId: string) => {
    const editableTask = findTaskById(tasksList, taskId);
    const filteredTask = filterTaskById(tasksList, taskId);

    if (editableTask) {
      editableTask.status = newTaskStatus;
      setTasksList([...filteredTask, editableTask]);
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
      <StyledField>
        Category:
        <StyledInput
          type="text"
          value={category}
          onChange={onChangeCategory}
          onBlur={checkRequiredField}
          error={error}
        />
      </StyledField>

      <StyledField>
        Description:
        <StyledInput
          type="text"
          value={description}
          onChange={onChangeDescription}
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
        <DoneButton isError={error} saveTaskToCategory={saveTaskToCategory} />
      </StyledInputButtonBlock>

      <ExitButton />
    </StyledContainer>
  );
};
