import { useLocation } from 'react-router-dom';

import { TaskInfo } from '@/components/task-info';

export const CategoryTask = () => {
  const location = useLocation();
  const category = location.state.category;

  return <TaskInfo category={category} />;
};
