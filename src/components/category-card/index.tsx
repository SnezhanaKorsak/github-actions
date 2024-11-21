import {
  StyledCategoryButton,
  StyledCategoryContainer,
  StyledTaskCount,
} from '@/components/category-card/styled';
import { CategoryInfo } from '@/types/index';

type Props = {
  categoryInfo: CategoryInfo;
};

export const CategoryCard = ({ categoryInfo }: Props) => {
  const { title, tasks, bgColor } = categoryInfo;
  const taskCount = tasks.length;

  return (
    <StyledCategoryButton>
      <StyledCategoryContainer bgColor={bgColor}>
        {title}
      </StyledCategoryContainer>
      <StyledTaskCount>{taskCount}</StyledTaskCount>
    </StyledCategoryButton>
  );
};
