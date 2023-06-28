import { Image } from "react-bootstrap";
import frontImage from "../../assets/products/frontYellow.jpg";

export const ItemFrontPage = () => {
  return (
    <div className="card  position-relative" style={{ height: "50rem" }}>
      <Image src={frontImage} fluid className="h-100" />
      <div className="card-img-overlay w-50    translate-middle-y  positionText">
        <h1 data-shadow="¡Descubre nuestros productos!">
      
          ¡Descubre nuestros productos!
        </h1>
      </div>
    </div>
  );
};
