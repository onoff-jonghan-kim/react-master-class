import React from 'react';
import { ThemeProvider } from "styled-components";
import ReactDOM from 'react-dom/client';
import App from './App';
import { Theme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
