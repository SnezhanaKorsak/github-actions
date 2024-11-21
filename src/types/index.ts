export type Task = {
  id: string;
  name: string;
  status: boolean;
};

export type Category = {
  description: string;
  tasksList: Task[];
};

export type CategoryInfo = {
  title: string;
  description: string;
  tasks: Task[];
  bgColor: string;
};
