
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
export const ItemCard = ({ id, nombre,  precio, img }) => {
  

  return (
    <Card style={{ width: "13rem" }} className="me-lg-2  mb-2 mt-5 ">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
       
        <Card.Text>Precio: {precio}</Card.Text>
       
        <Button variant="outline-primary" className="btn-outline-info">
           <Link to={`/detail/${id}`}>Ver más</Link>
          </Button>
      </Card.Body>
    </Card>
  );
};
