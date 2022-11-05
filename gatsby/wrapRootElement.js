import React from 'react';
// const Layout = require("./src/components/layout").default;
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';

export function wrapRootElement({ element }) {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
}