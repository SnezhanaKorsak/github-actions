import { Layout } from '@/components/layout';
import { RoutesPath } from '@/constants/routes-path';

export const routes = [
  {
    path: RoutesPath.Home,
    element: <Layout />,
    children: [
      {
        path: RoutesPath.Home,
        element: <div>Home</div>,
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
