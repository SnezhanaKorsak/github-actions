import { CreateTaskButton } from '@/components/buttons/create-task-button';
import { CategoryCard } from '@/components/category-card';
import { StyledCategoryContainer } from '@/components/category-cards-list/styled';
import { useAppSelector } from '@/hooks/redux';
import { taskCategoriesSelector } from '@/store/task-categories/selectors';

export const CategoryCardsList = () => {
  const categories = useAppSelector(taskCategoriesSelector);

  const categoriesList = categories.map((category) => {
    return <CategoryCard key={category[0]} categoryInfo={category[1]} />;
  });

  return (
    <StyledCategoryContainer>
      {categoriesList}
      <CreateTaskButton />
    </StyledCategoryContainer>
  );
};
