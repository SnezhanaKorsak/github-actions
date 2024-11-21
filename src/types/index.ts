export type Task = {
  id: string;
  name: string;
  status: boolean;
};

export type Category = {
  category: string;
  description: string;
  tasksList: Task[];
};
