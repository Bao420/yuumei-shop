import './module/sass/main.css';
import Header from './component/layout/header/header';
import Home from './component/layout/home/home'
import Service from './component/layout/service/service';
import Product from './component/layout/product/Product'
import About from './component/layout/about/about'
import Reviews from './component/layout/reviews/reviews'
import Contact from './component/layout/contact/contact';
import Blogs from './component/layout/blogs/blogs';
import Footer from './component/layout/footer/footer';
import Cart from './component/layout/Cart/Cart';
import LoginLayOut from './component/layout/loginLayOut/loginLayOut';
import Login from './component/login/login';
import { Route, Routes } from "react-router-dom";
import React from 'react';

// ---------------------

function App() {
  return (
    <div className="App" >

      <Routes>
        <Route path='/' element={
          <React.Fragment>
            <Header />
            <Home />
            <Service />
            <Product />
            <About />
            <Reviews />
            <Contact />
            <Blogs />
            <Footer />
            <LoginLayOut />
          </React.Fragment>
        } />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
      </Routes>



    </div>
  );
}

export default App;
