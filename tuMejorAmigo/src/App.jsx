import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  './scss/styles.scss'
import './App.css'
import {  NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Footer } from "./components/Footer/Footer"
function App() {
  

  return (
    <>
   <NavBar />
<ItemListContainer  greeting = {"Ecommerce"}/>
    <Footer/>
    </>
  )
}

export default App
