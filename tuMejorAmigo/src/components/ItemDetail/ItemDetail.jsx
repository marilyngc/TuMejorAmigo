import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import SelectSize from "../SelectSize/SelectSize";

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

 
  return (
    <Card class="card mb-3 mt-5 pt-5" style={{ width: "90rem" }}>
      <div class="row g-0">
        <div class="col-md-4">
          <Card.Img src={img} className="col" />
        </div>
        <div class="col-md-8">
          <Card.Body className="col">
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>{descripcion}</Card.Text>
            <Card.Text> ${precio}</Card.Text>
          </Card.Body>
          <SelectSize setSize={setSize} options={sizes}/>
          <ItemCount
            max={stock}
            counter={count}
            setCounter={setCount}
            handleAggregate={handleAggregate}
          />
        </div>
      </div>
    </Card>
  );
};
