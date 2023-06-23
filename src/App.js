import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Menu from "../src/components/common/Menu"
import Footer from "../src/components/common/Footer"
import Home from "../src/components/home/Home"
import Character from "../src/components/personajes/Character"
import Comic from "../src/components/comics/Comic"
import Comics  from "../src/components/comics/Comics"
import Personaje from "../src/components/personajes/Personaje"
import UniversoCinematografico from "../src/components/universo/UniversoCinematografico"


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