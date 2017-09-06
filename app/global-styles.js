import { injectGlobal } from 'styled-components';

import systemFontStack from './fontstack';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: ${systemFontStack};
  }

  body.fontLoaded {
    font-family: ${systemFontStack};
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;
