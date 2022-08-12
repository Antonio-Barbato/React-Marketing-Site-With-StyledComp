import React from "react";
import { Footer, Navbar } from "./components";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Services from '../src/pages/Services/Services'
import Products from '../src/pages/Products/Products'
import SignUp from '../src/pages/SignUp/SignUp'
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
