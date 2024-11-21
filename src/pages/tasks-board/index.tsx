import { CategoryCardsList } from '@/components/category-cards-list';
import { EmptyTaskBoard } from '@/components/empty-task-board';
import { useAppSelector } from '@/hooks/redux';
import { taskCategoriesSelector } from '@/store/task-categories/selectors';
import { isEmptyList } from '@/utils/is-empty-list';

export const TasksBoardPage = () => {
  const categories = useAppSelector(taskCategoriesSelector);

  const isEmptyTasksList = isEmptyList(categories);

  return <>{isEmptyTasksList ? <EmptyTaskBoard /> : <CategoryCardsList />}</>;
};
