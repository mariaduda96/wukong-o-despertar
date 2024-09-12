import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import Novojogo from './components/novojogo';
import Home from './pages/home' 
import Opcao from './pages/opicao';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/novojogo' element={<Novojogo/>} />
      <Route path="/opcao" element={<Opcao />} />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);


