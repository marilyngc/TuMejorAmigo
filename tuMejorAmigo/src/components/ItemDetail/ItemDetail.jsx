import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import SelectSize from "../SelectSize/SelectSize";
import {useNavigate} from "react-router-dom"
export const ItemDetail = ({
  id,
  nombre,
  precio,
  categoria,
  descripcion,
  img,
  stock,sizes,
  init = 0,
}) => {
  const [count, setCount] = useState(init);
  const [size, setSize] = useState(null);

const navigate = useNavigate();

  const handleAggregate = () => {
    const item = {
      id,
      nombre,
      precio,
      categoria,
      descripcion,
      img,
      stock,
      count,
      size,
    }; // aqui manipulamos la info en los hijos
  };

  const handlerBack = () => {
    navigate(-1)
  }
 
  return (
    <Card className="card mb-3 mt-5 " style={{ width: "90rem" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <Card.Img src={img} className="col" />
        </div>
        <div className="col-md-8">
          <Card.Body className="col">
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>{descripcion}</Card.Text>
            <Card.Text> ${precio}</Card.Text>
          </Card.Body>
          {sizes && sizes.length > 0 && sizes[0].value !== null && (
            <SelectSize setSize={setSize} options={sizes} />
          )}
          <ItemCount
            max={stock}
            counter={count}
            setCounter={setCount}
            handleAggregate={handleAggregate}
          />
          <hr />
          <Button className="btn-outline-info mt-2" onClick={handlerBack} >Volver</Button>
        </div>
      </div>
    </Card>
  );
};
