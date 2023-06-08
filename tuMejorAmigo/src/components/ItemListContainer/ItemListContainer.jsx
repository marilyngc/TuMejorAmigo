
import { useState,useEffect } from "react"
import { pedirDatos } from "../../HELPERS/pedirDatos"
import { ItemList } from "./ItemList/ItemList"
import { PokemonApi } from "../../api/PokemonApi"



export const ItemListContainer = () => {
//  const [counter, setCounter] = useState (init)
//  const [saludar, setSaludar] = useState(false)
 const [product, setProduct] = useState([]) // Iniciamos vacio

    
 useEffect(() => {
     pedirDatos
     .then((res) =>{
       setProduct(res)
     })
     .catch((error) => {
         console.log(error)
     })

}, []) // El array vacio es el montage para que no se renderise

// // GET => alumnos | id: number
// // query params
// const url = "https://api.coderhouse.com/alumnos?id=25"; // pido el id del usuario
// const url2 = "https://api.coderhouse.com/alumnos?id=25&comision=43225"; // para solicitar dos  cosas

// // GET  => cursos
// const url3 = "https://api.coderhouse.com/alumnos?{id}"; 


////////////////////////////////////////////
//  const sumar = () =>{
//       setCounter(counter + step)
//  }
//  const restar = () =>{
//       setCounter(counter - step)
//  }
//  const reset = () =>{
//       setCounter(init)
//  }

//  const cambiar = () => {
//      setSaludar(!saludar)
//  }


    return(

        <div className="container">
          {/* <button onClick = {sumar}>Sumar</button>
          <button onClick = {restar}>Restar</button>
          <button onClick = {reset}>Reset</button>
          <p>{counter}</p>

          <hr />

          <button onClick={cambiar}> Click me</button>
          <p>{saludar ? "Hola mundo" : "Chau mundo"}</p> */}
<PokemonApi/>
   <ItemList items={product}/>
        </div>
    )
}