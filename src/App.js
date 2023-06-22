import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Menu from "./components/common/Menu"
import Home from "./components/views/Home"
import Character from "./components/views/Character"
import Comic from "./components/views/Comic"
import Comics from "./components/views/Comics"
import Personaje from "./components/views/Personaje"
import Footer from "./components/common/Footer"
import UniversoCinematografico from './components/views/UniversoCinematografico';


const App = () => {
  return (
      <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/character' element={<Character/>}></Route>
        <Route exact path='/comic/:id' element={<Comic/>}></Route>
        <Route exact path='/comics' element={<Comics/>}></Route>
        <Route exact path='/character/:id' element={<Personaje/>}></Route>
        <Route exact path='/universocinematografico' element={<UniversoCinematografico/>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
  );
};

export default App;