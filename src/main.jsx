import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// index.html carries static head tags for crawlers that do not run JS.
// Each route renders its own (React 19 hoists them), so drop the static copies to avoid duplicates.
document.querySelectorAll('head [data-static]').forEach((el) => el.remove());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
