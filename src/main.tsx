import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PageNameProvider } from "./context/page.context";
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PageNameProvider>
      <App />
    </PageNameProvider>
  </React.StrictMode>
)
