import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Count from './components/minitask1/count.jsx';
import Product from './components/minitask2/App.jsx';
import FetchPokemon from './components/minitask3/fetchPokemon.jsx';
import Review from './components/minitask4/FormReview.jsx';
import FetchChar from './components/minitask5/CharList.jsx'
import DetailChar from './components/minitask5/DetailChar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Review />} />
        <Route path="/count" element={<Count />} />
        <Route path="/app" element={<Product />} />
        <Route path="/pokemon" element={<FetchPokemon />} />
        <Route path='/characters' element={<FetchChar/>}/>
        <Route path="/characters/:id/:slug" element={<DetailChar />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
