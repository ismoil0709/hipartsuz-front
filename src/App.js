import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ShowProduct from './pages/ShowProduct';
import Cart from './pages/Cart'
import { useEffect} from 'react';
import Order from './pages/Order';
const tg = window.Telegram.WebApp;

function App() {
  useEffect(()=>{
    tg.ready();
  },[])
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/product' element={<ShowProduct />}></Route>
          <Route exact path='/cart' element={<Cart/>}></Route>
          <Route exact path='/checkout' element={<Order />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
