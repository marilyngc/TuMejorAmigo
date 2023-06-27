

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const ItemCard = ({ id, nombre,  precio, img }) => {
  

  return (<> 
  
    <Card style={{ width: "15rem" }} className="m-lg-5   shop-card">
   <div className="imgHidden p-3">
   <Card.Img variant="top" src={img}  />
   </div>

      <Card.Body className="p-3">
        <Card.Title className="">{nombre}</Card.Title>
       
        <Card.Text>Precio: {precio}</Card.Text>
       
  

    
       
      </Card.Body>

    <Link to={`/detail/${id}`} className="text-decoration-none  btnCard ">Ver más</Link>

  
    </Card>
    </>
  );
};
