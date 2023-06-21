import { useEffect, useState } from "react";
import { pedirDatos } from "../HELPERS/pedirDatos";
import { useParams } from "react-router-dom";

export const useProducts = () => {
  const [products, setProducts] = useState([]); //Iniciamos vacio
  const { categoryId } = useParams();

  useEffect(() => {
    pedirDatos
      .then((res) => {
        if(!categoryId){
            setProducts(res);
        }
        else{
            setProducts(res.filter((item) => item.category === categoryId));
        }
       
      })

      .catch((err) => console.log(err));
  }, [categoryId]); // El array vacio es el montage para que no se renderise
  return {
    products
  };
};
