import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css';
import Home from './pages/home' 
import Opcao from './pages/opicao';
import Novojogo from './components/novojogo';
import Opicaofora from './components/opicoesfora';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path="/opcao" element={<Opcao />} />
      <Route path='/novojogo' element={<Novojogo />} />
      <Route path='/opicoesfora' element={<Opicaofora />} />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);