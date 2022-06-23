import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from "styled-components";

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};
// const darkTheme = {
//   textColor: "whitesmoke",
//   backgroundColor: "#111",
// };

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

