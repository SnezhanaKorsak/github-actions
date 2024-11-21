import { EmptyTaskBoard } from '@/components/empty-task-board';
import { isEmptyList } from '@/utils/is-empty-list';

export const TasksBoardPage = () => {
  const tasksList: string[] = [];
  const isEmptyTasksList = isEmptyList(tasksList);

  return <>{isEmptyTasksList && <EmptyTaskBoard />}</>;
};
