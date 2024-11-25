import { Task } from '@/types/index';

export const findTaskById = (tasks: Task[], id: string) => {
  return tasks.find((task) => task.id === id);
};

export const filterTaskById = (tasks: Task[], id: string) => {
  return tasks.filter((task) => task.id !== id);
};

export const filterTaskByStatus = (tasks: Task[], status: boolean) => {
  return tasks.filter((task) => task.status === status);
};

export const getTasksCount = (tasks: Task[], status: boolean) => {
  const filteredTasks = filterTaskByStatus(tasks, status);

  return filteredTasks.length;
};
