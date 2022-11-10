import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
function App() {
  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <Routes>
      {/* INICIO */}
      <Route path="/" element={<HeroSection/>}></Route>
      
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
