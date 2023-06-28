import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/styles.scss";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Footer } from "./components/Footer/Footer";
import { Inicio } from "./components/Inicio/Inicio";
import { Registrarme } from "./components/Registrarme/Registrarme";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import Page404 from "./components/404/Page404"


function App() {
  return (
    <BrowserRouter>
  

      <Routes>
        <Route path="/registrarme" element={<NavBar variant/>}/>
        <Route path="*" element={<NavBar/>}/>
      </Routes>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registrarme" element={<Registrarme />} />
        <Route path="/catalogo" element={<ItemListContainer />} />
        <Route path="/catalogo/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
     {/*    <Route path="*" element={<Navigate to={"/"}/>}/> */}
        <Route path="*" element={<Page404/>}/>
      </Routes>
     
      <Footer />
    </BrowserRouter>
  );
}

export default App;
