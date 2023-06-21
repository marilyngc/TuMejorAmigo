

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const ItemCard = ({ id, nombre,  precio, img }) => {
  

  return (<> 
  
    <Card style={{ width: "15rem" }} className="m-lg-5  p-3  shop-card">
   <div className="imgHidden">
   <Card.Img variant="top" src={img}  />
   </div>

      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
       
        <Card.Text>Precio: {precio}</Card.Text>
       
     
           <Link to={`/detail/${id}`} className="text-decoration-none btn-send">Ver más</Link>
       
      </Card.Body>
    </Card>
    </>
  );
};
