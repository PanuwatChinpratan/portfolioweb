import React from 'react';
import { createRoot } from 'react-dom/client'; // แก้ไข import นี้
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
