import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// PAGINAS
import Home from "./components/Home/Home";
import Proyectos from "./components/Proyectos/Proyectos";

// Páginas secundarias
  // Diseño
  import Fisioterapia from "./components/Proyectos/ProyectosPagina/Trabajos/Fisioterapia"
  import Cucu from "./components/Proyectos/ProyectosPagina/Trabajos/Cucu"
  import Elvis from "./components/Proyectos/ProyectosPagina/Trabajos/Elvis"
  // Programación
  import Conpas from "./components/Proyectos/ProyectosPagina/Trabajos/Conpas"
  import CoderJS from "./components/Proyectos/ProyectosPagina/Trabajos/CoderJS"

function App() {
  return (
    <>
    <BrowserRouter>
      <Header></Header>
      
      <Routes>
      {/* INICIO */}
      <Route path="/" element={<Home/>}></Route>
      
      {/* PROYECTOS */}
      <Route path="/proyectos" element={<Proyectos/>}/>

        {/* DISEÑO */}
        {/* PROYECTOS > DISEÑO > FISIOTERAPIA */}
        <Route path="/proyectos/diseño/fisioterapia" element={<Fisioterapia/>}/>
      
        {/* PROYECTOS > DISEÑO > CUCU*/}
        <Route path="/proyectos/diseño/cucu" element={<Cucu></Cucu>}/>

        {/* PROYECTOS > DISEÑO > Elvis*/}
        <Route path="/proyectos/diseño/elvis" element={<Elvis></Elvis>}/>

        {/* PROGRAMACIÓN */}
        {/* PROYECTOS > PROGRAMACIÓN > CONPAS */}
        <Route path="/proyectos/programacion/conpas" element={<Conpas/>}/>

        {/* PROYECTOS > PROGRAMACIÓN > CODER JS */}
        <Route path="/proyectos/programacion/coderjs" element={<CoderJS/>}/>

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
    
  );
}

export default App;
