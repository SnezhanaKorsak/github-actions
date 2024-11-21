import { Task } from '@/types/index';

export const findTaskById = (tasks: Task[], id: string) => {
  return tasks.find((task) => task.id === id);
};

export const filterTaskById = (tasks: Task[], id: string) => {
  return tasks.filter((task) => task.id !== id);
};
