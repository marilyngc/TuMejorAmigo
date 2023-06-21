import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const link = [
  { id: 1, nav: "Ser cuidador", link: "/serCuidador" },
  { id: 2, nav: "Registrarme", link: "/registrarme" },
  { id: 3, nav: "Catálogo", link: "/catalogo" },
];

export const NavLink = () => {
  return (
    <ListGroup horizontal className="nav-item mx-3 my-0">
      {link.map((text, index) => (
        <Link className="nav-link" key={index} to={text.link}>
          {" "}
          {text.nav}{" "}
        </Link>
      ))}
    </ListGroup>
  );
};
