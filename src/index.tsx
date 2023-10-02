import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppStateProvider } from './provider/AppStateProvider';
import { ModalProvider } from './provider/ModalProvider';
import { ThemeProvider } from './provider/ThemeProvider';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ModalProvider>
        <AppStateProvider>
          <App />
        </AppStateProvider>
      </ModalProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
