import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../globalStyles';
import { baseTheme } from '../../theme';
import { routes } from '../routes';

const router = createBrowserRouter(routes);

export const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </ThemeProvider>
  );
};
