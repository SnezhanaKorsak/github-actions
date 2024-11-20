import { Layout } from '@/components/layout';
import { RoutesPath } from '@/constants/routes-path';
import { HomePage } from '@/pages/home/';

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
        element: <div>TaskBoard</div>,
      },
      {
        path: RoutesPath.Tasks,
        element: <div>Tasks</div>,
      },
    ],
  },
];
