import { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AddNewTaskFieldComponent } from '@/components/add-new-task-field';
import { AddTaskButton } from '@/components/buttons/add-task-button';
import { CategoryDescription } from '@/components/category-description';
import { TaskCheckbox } from '@/components/task-checkbox';
import {
  StyledButtonContainer,
  StyledContainer,
  StyledTitle,
} from '@/components/task-info/styled';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { taskInfoByCategorySelector } from '@/store/task-categories/selectors';
import {
  addTaskToCategory,
  changeTaskNameInCategory,
  changeTaskStatusInCategory,
} from '@/store/task-categories/slice';

type Props = {
  category: string;
};

export const TaskInfo = ({ category }: Props) => {
  const dispatch = useAppDispatch();

  const { title, description, tasks } = useAppSelector(
    taskInfoByCategorySelector,
  )(category);

  const [addTaskMode, setAddTaskMode] = useState(false);
  const [taskName, setTaskName] = useState<string>('');

  const changeTaskName = (newTaskName: string, taskId: string) => {
    dispatch(changeTaskNameInCategory({ category, newTaskName, taskId }));
  };

  const changeTaskStatus = (newTaskStatus: boolean, taskId: string) => {
    dispatch(changeTaskStatusInCategory({ category, newTaskStatus, taskId }));
  };

  const onAddTaskMode = () => setAddTaskMode(true);

  const onChangeTaskNameInput = (e: ChangeEvent<HTMLInputElement>) =>
    setTaskName(e.target.value);

  const addTask = () => {
    if (!taskName) {
      return;
    }
    const newTask = {
      id: uuidv4(),
      name: taskName,
      status: false,
    };

    dispatch(addTaskToCategory({ category, task: newTask }));
    setAddTaskMode(false);
  };

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <CategoryDescription category={category} description={description} />
      <TaskCheckbox
        items={tasks}
        changeTaskName={changeTaskName}
        changeTaskStatus={changeTaskStatus}
        deleteTask={() => {}}
      />
      {addTaskMode && (
        <AddNewTaskFieldComponent
          taskName={taskName}
          onChange={onChangeTaskNameInput}
          addTask={addTask}
        />
      )}
      <StyledButtonContainer>
        <AddTaskButton addTaskField={onAddTaskMode} />
      </StyledButtonContainer>
    </StyledContainer>
  );
};
