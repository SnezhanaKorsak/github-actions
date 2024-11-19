import { createGlobalStyle } from 'styled-components';

import { baseTheme } from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: ${baseTheme.primaryFont};
  }
`;
