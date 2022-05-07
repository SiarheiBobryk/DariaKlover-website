import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import AppConfigProvider from './providers/AppConfigProvider';
import ColorModeProvider from './providers/ColorModeProvider';
import ThemeProvider from './providers/ThemeProvider';

import App from './App';

import '@fontsource/roboto/400.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const ui = (
  <AppConfigProvider>
    <ColorModeProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeProvider>
  </AppConfigProvider>
);
const app = process.env.NODE_ENV === 'development' ? <React.StrictMode>{ui}</React.StrictMode> : ui;

root.render(app);

// TODO: Add web vitals
