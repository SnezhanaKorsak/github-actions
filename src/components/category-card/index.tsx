import { useNavigate } from 'react-router-dom';

import {
  StyledCategoryButton,
  StyledCategoryContainer,
  StyledTaskCount,
} from '@/components/category-card/styled';
import { RoutesPath } from '@/constants/routes-path';
import { CategoryInfo } from '@/types/index';
import { getTasksCount } from '@/utils/tasks';

type Props = {
  categoryInfo: CategoryInfo;
};

export const CategoryCard = ({ categoryInfo }: Props) => {
  const navigate = useNavigate();

  const { title, tasks, bgColor } = categoryInfo;
  const taskCount = getTasksCount(tasks, false);

  const onClickHandler = () => {
    navigate(RoutesPath.Task, { state: { category: title } });
  };

  return (
    <StyledCategoryButton
      data-testId="category-button"
      onClick={onClickHandler}
    >
      <StyledCategoryContainer data-testId="category-name" bgColor={bgColor}>
        {title}
      </StyledCategoryContainer>
      <StyledTaskCount data-testId="category-task-count">
        {taskCount}
      </StyledTaskCount>
    </StyledCategoryButton>
  );
};
