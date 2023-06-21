import { useEffect, useState } from "react";
import { pedirDatos } from "../../HELPERS/pedirDatos";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null); //Iniciamos vacio
  const {itemId} = useParams();
const [loading, setLoading] = useState(true)
  useEffect(() => {
setLoading(true)
    pedirDatos
      .then((res) => {
        setItem(res.find((prod) => prod.id === Number(itemId)))
      })

      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [itemId]); // El array vacio es el montage para que no se renderise
  return (
    <div className="container">
{
  loading
  ? <h2>Cargando....</h2>
  : <ItemDetail{...item} />
}
    </div>
  )
};
