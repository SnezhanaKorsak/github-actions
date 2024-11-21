import { EmptyTaskBoard } from '@/components/empty-task-board';
import { isEmptyList } from '@/utils/is-empty-list';
//import {useAppSelector} from "@/hooks/redux";
//import {tasksByCategorySelector} from "@/store/task-categories/selectors";

export const TasksBoardPage = () => {
  //const categories = useAppSelector(tasksByCategorySelector);

  const tasksList: string[] = [];
  const isEmptyTasksList = isEmptyList(tasksList);

  return <>{isEmptyTasksList && <EmptyTaskBoard />}</>;
};
