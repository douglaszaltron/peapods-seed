import { App } from '@/app';
import React from 'react';
import reactDom from 'react-dom/client';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = reactDom.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
