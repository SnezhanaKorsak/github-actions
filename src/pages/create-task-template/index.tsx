import { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TaskCheckbox } from '@/components/task-checkbox';
import {
  StyledAddTaskButton,
  StyledContainer,
  StyledField,
  StyledInput,
  StyledInputButtonBlock,
  StyledInputWithButton,
} from '@/pages/create-task-template/styled';
import { Task } from '@/types/index';
import { filterTaskById, findTaskById } from '@/utils/tasks';

export const CreateTaskTemplate = () => {
  const [category, setCategory] = useState<string>('');
  const [taskName, setTaskName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [tasksList, setTasksList] = useState<Task[]>([]);

  const onChangeCategory = (e: ChangeEvent<HTMLInputElement>) =>
    setCategory(e.target.value);

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

  return (
    <StyledContainer>
      <StyledField>
        Category:
        <StyledInput type="text" value={category} onChange={onChangeCategory} />
      </StyledField>

      <StyledField>
        Description:
        <StyledInput
          type="text"
          value={description}
          onChange={onChangeDescription}
        />
      </StyledField>

      <StyledField>
        Task:
        <StyledInputButtonBlock>
          <StyledInputWithButton
            type="text"
            value={taskName}
            onChange={onChangeTaskNameInput}
          />
          <StyledAddTaskButton onClick={addTask}>+</StyledAddTaskButton>
        </StyledInputButtonBlock>
      </StyledField>

      <TaskCheckbox
        items={tasksList}
        deleteTask={deleteTask}
        changeTaskName={changeTaskName}
        changeTaskStatus={changeTaskStatus}
      />
    </StyledContainer>
  );
};
