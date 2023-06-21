
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/backgrounds/blob-scene-haikei-phone.svg"
export const ItemCard = ({ id, nombre,  precio, img }) => {
  

  return (
    <Card style={{ width: "15rem",backgroundImage:`url(${backgroundImage  })`, backgroundSize:"cover", backgroundRepeat:"no-repeat" }} className="mx-lg-5   mb-2 mt-5 shop-card">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
       
        <Card.Text>Precio: {precio}</Card.Text>
       
     
           <Link to={`/detail/${id}`} className="text-decoration-none btn-send">Ver más</Link>
       
      </Card.Body>
    </Card>
  );
};
