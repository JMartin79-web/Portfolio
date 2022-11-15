import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// PAGINAS
import Home from "./components/Home/Home";
import Proyectos from "./components/Proyectos/Proyectos";
import IlustraciónGrande from "./components/Proyectos/ProyectosPagina/IlustraciónGrande";


function App() {
  return (
    <>
    <BrowserRouter>
      <Header></Header>
      
      <Routes>
      {/* INICIO */}
      <Route path="/" element={<Home/>}></Route>
      
      {/* PROYECTOS */}
      <Route path="/proyectos" element={<Proyectos></Proyectos>}></Route>

      <Route path="/ilusGrande" element={<IlustraciónGrande/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
    
  );
}

export default App;
