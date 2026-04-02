import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Count from './components/minitask1/count.jsx';
import App from './components/minitask2/App.jsx';
import FetchPokemon from './components/minitask3/fetchPokemon.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemon" element={<FetchPokemon />} />
        <Route path="/count" element={<Count />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
