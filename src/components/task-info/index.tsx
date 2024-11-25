import { CategoryDescription } from '@/components/category-description';
import { TaskCheckbox } from '@/components/task-checkbox';
import { StyledContainer, StyledTitle } from '@/components/task-info/styled';
import { useAppSelector } from '@/hooks/redux';
import { taskInfoByCategorySelector } from '@/store/task-categories/selectors';

type Props = {
  category: string;
};

export const TaskInfo = ({ category }: Props) => {
  const { title, description, tasks } = useAppSelector(
    taskInfoByCategorySelector,
  )(category);

  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <CategoryDescription description={description} />
      <TaskCheckbox items={tasks} />
    </StyledContainer>
  );
};
