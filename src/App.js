import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ShowProduct from './pages/ShowProduct';
import Cart from './pages/Cart'
import { useState } from 'react';

const tg = window.Telegram.WebApp;

function App() {

  useState(()=>{
    tg.ready();
  })
  document.addEventListener('DOMContentLoaded', () => {
    let theme = tg.colorScheme;
    if ('dark' === 'dark') {
        let elements = document.querySelectorAll('.mantine-1w6i6a8');
        for(let i = 0; i < elements.length; i++){
            const element  = elements[i];
            element.innerHTML = ('SALOM')
            // alert(element)
            // element.style.backgroundColor = 'rgba(37,38,43,255)';
        }
        // elements = document.querySelectorAll('.mantine-9tuz4g');
        // for (let i = 0; i < elements.length; i++) {
        //     const element = elements[i];
        //     element.style.backgroundColor = 'rgba(37,38,43,255)'
        // }
        // elements = document.querySelectorAll('.mantine-s9arro');
        // for (let i = 0; i < elements.length; i++) {
        //     const element = elements[i];
        //     element.style.color = 'rgba(191,192,197,255)';
        // }
        // elements = document.querySelectorAll('.mantine-6qpjlo');
        // for (let i = 0; i < elements.length; i++) {
        //     const element = elements[i];
        //     element.style.color = 'rgba(191,192,197,255)'
        // }
        // elements = document.querySelectorAll('.mantine-qxe4dyy');
        // for (let i = 0; i < elements.length; i++) {
        //     const element = elements[i];
        //     element.style.color = 'rgba(191,192,197,255)'
        // }
    }
});
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/product' element={<ShowProduct />}></Route>
          <Route exact path='/cart' element={<Cart/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
