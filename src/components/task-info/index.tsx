import { CategoryDescription } from '@/components/category-description';
import { TaskCheckbox } from '@/components/task-checkbox';
import { StyledContainer, StyledTitle } from '@/components/task-info/styled';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { taskInfoByCategorySelector } from '@/store/task-categories/selectors';
import {
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

  const changeTaskName = (newTaskName: string, taskId: string) => {
    dispatch(changeTaskNameInCategory({ category, newTaskName, taskId }));
  };

  const changeTaskStatus = (newTaskStatus: boolean, taskId: string) => {
    dispatch(changeTaskStatusInCategory({ category, newTaskStatus, taskId }));
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
    </StyledContainer>
  );
};
