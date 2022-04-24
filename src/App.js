import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Component/Header";
import style from "./App";
import Starships from "./Pages/Starships";
import Planets from "./Pages/Planets";
import Home from "./Pages/Home";
import Xwing from "./Pages/x-wing";
import PTTS from "./Pages/PTTS";
import TIE from "./Pages/TIE";
import MF from "./Pages/MF";
import DS from "./Pages/DS";

function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>

      <Routes>
        <Route path="/planets" element={<Planets />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/home" element={<Home />} />
        <Route path="/xwing" element={<Xwing />} />
        <Route path="/ptts" element={<PTTS />} />
        <Route path="/tie" element={<TIE />} />
        <Route path="/mf" element={<MF />} />
        <Route path="/ds" element={<DS />} />
      </Routes>
    </>
  );
}

export default App;
