
import { Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

export const ItemDetail = ({
  id,
  nombre,
  precio,
  categoria,
  descripcion,img,stock 
}) => {


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
          
          
          </Card.Body>
          <ItemCount max={stock}/>
        </div>
      </div>
    </Card>
  );
};
