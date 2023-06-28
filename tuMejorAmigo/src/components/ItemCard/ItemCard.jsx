import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const ItemCard = ({ id, nombre, precio, img }) => {
  return (
    <>
      <Card style={{ width: "15rem" }} className="m-lg-3   shop-card">
        <div className="imgHidden ">
          <Card.Img variant="top" src={img} className="h-100 " />
        </div>

        <Card.Body className="py-3 px-0">
          <Card.Title className="title">{nombre}</Card.Title>

          <Card.Text className="price"> ${precio}</Card.Text>
        </Card.Body>

        <Link to={`/detail/${id}`} className="text-decoration-none btn btn-outline-card">
          Ver más
        </Link>
      </Card>
    </>
  );
};
