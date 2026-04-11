import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from './App.jsx'
import './index.css'
import UserProvider from './context/userProvider.jsx';
import Login from './pages/Login.jsx'
import Count from './components/minitask1/count.jsx';
import Product from './components/minitask2/App.jsx';
import FetchPokemon from './components/minitask3/fetchPokemon.jsx';
import Review from './components/minitask4/FormReview.jsx';
import FetchChar from './components/minitask5/CharList.jsx'
import DetailChar from './components/minitask5/DetailChar.jsx';
import PokemonGallery from './components/useFetch/PokemonGallery.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<App />} /> */}
          <Route path="/" element={<Review />} />
          <Route path="login" element={<Login />} />
          <Route path="count" element={<Count />} />
          <Route path="app" element={<Product />} />
          <Route path="pokemon" element={<FetchPokemon />} />
          <Route path='characters'>
            <Route index element={<FetchChar />} />
            <Route path=':id'>
              <Route path=':slug' element={<DetailChar />} />
            </Route>
          </Route>
          <Route path="customhook" element={<PokemonGallery />} />

        </Routes>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>,
)
