import {  Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';
import Signup from './components/Signup';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Products from './components/Products';
import Orders from './components/orders';
import Myorders from './components/Myorders';
import About from './components/About';


function App() {
  useEffect(()=>{
    document.title='Techno Computers';
  })

  const location = useLocation();

  return (
    
   <div>
      { location.pathname !=='/'&& location.pathname !=='/signup' && <Header />}
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/myorders' element={<Myorders/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
      </div>
  );
}

export default App;
