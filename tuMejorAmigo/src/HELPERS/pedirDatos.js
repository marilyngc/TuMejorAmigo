import { MOCK_DATA } from "../components/ItemListContainer/MOCK_DATA.JS"


export const pedirDatos = new Promise((resolve, reject) => {
    // cuerpo promesa
  
    setTimeout(() => {
       resolve(MOCK_DATA)
    },2000)
   // reject("promesa rechazada")
   })

