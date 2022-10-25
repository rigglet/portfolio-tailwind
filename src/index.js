import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "@material-tailwind/react";

const customTheme = {
  component: {
    defaultProps: {},
    valid: {},
    styles: {}
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider value={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
