import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Count from './components/minitask1/count.jsx';
import Product from './components/minitask2/App.jsx';
import FetchPokemon from './components/minitask3/fetchPokemon.jsx';
import Review from './components/minitask4/FormReview.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Review />} />
        <Route path="/count" element={<Count />} />
        <Route path="/app" element={<Product />} />
        <Route path="/pokemon" element={<FetchPokemon />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
