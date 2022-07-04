import React from 'react';
import { ThemeProvider } from "styled-components";
import ReactDOM from 'react-dom/client';
import App from './App';
import { Theme } from './theme';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </div>
);
