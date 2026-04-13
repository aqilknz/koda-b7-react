import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { storeProduct, persistor } from "./redux/storeProduct.js";
import { PersistGate } from "redux-persist/integration/react";
// import App from './App.jsx'
import './index.css'
// import ReduxStore from './redux/store.js'
import UserProvider from './context/UserProvider.jsx';
import Login from './pages/Login.jsx'
import Count from './components/minitask1/count.jsx';
import Product from './components/minitask2/App.jsx';
import FetchPokemon from './components/minitask3/fetchPokemon.jsx';
import Review from './components/minitask4/FormReview.jsx';
import FetchChar from './components/minitask5/CharList.jsx'
import DetailChar from './components/minitask5/DetailChar.jsx';
import PokemonGallery from './components/useFetch/PokemonGallery.jsx';
import Survey from './pages/Survey.jsx'
import ProductRedux from './pages/ProductRedux.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ReduxProvider store={ReduxStore}> */}
    <ReduxProvider store={storeProduct}>
      <PersistGate loading={null} persistor={persistor}>
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
              <Route path='survey' element={<Survey />} />
              <Route path="product" element={<ProductRedux />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </PersistGate>
    </ReduxProvider>
    {/* </ReduxProvider> */}
  </StrictMode>,
)
