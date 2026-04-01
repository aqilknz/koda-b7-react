import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Count from './components/minitask1/count.jsx';
import App from './components/minitask2/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Count />
    <App />
  </StrictMode>,
)
