import { useState } from "react";
import { Card, Button } from "react-bootstrap";

export const ItemDetail = ({
  id,
  nombre,
  precio,
  categoria,
  descripcion,
  img,init= 0
}) => {

        const [count, setCount] = useState(init)
        const add = () =>  setCount(count + 1)
        const subtract = () => { if (count > 0) {
            setCount(count - 1)
        } } 

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
            <Card.Text>Precio: {precio}</Card.Text>
            <div>
            <Button variant="outline-primary" onClick={subtract} className="btn-outline-info">
            -
            </Button>
            <Button variant="" className="border mx-4 px-5">
             {count}
            </Button>
            <Button variant="outline-primary" onClick={add} className="btn-outline-info">
         +
            </Button>
            </div>
          
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};
