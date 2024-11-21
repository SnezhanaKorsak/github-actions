import { Layout } from '@/components/layout';
import { RoutesPath } from '@/constants/routes-path';
import { CreateTaskTemplate } from '@/pages/create-task-template';
import { HomePage } from '@/pages/home/';
import { TasksBoardPage } from '@/pages/tasks-board';

export const routes = [
  {
    path: RoutesPath.Home,
    element: <Layout />,
    children: [
      {
        path: RoutesPath.Home,
        element: <HomePage />,
      },
      {
        path: RoutesPath.TaskBoard,
        element: <TasksBoardPage />,
      },
      {
        path: RoutesPath.CreateTask,
        element: <CreateTaskTemplate />,
      },
      {
        path: RoutesPath.Tasks,
        element: <div>Tasks</div>,
      },
    ],
  },
];
