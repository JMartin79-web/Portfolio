import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// PAGINAS
import Home from "./components/Home/Home";
import Proyectos from "./components/Proyectos/Proyectos";
import IlustraciónGrande from "./components/Proyectos/ProyectosPagina/IlustraciónGrande";
import Probar from "./components/Probar";

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

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
    
  );
}

export default App;
