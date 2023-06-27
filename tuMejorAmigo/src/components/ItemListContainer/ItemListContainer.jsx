import { ItemList } from "./ItemList/ItemList";
import {ItemFrontPage} from "./ItemFrontPage";
import { useProducts } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { RiHandSanitizerLine } from "react-icons/ri";
import { BsUniversalAccess} from "react-icons/bs";
import { TbHorseToy} from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineMedicalServices } from "react-icons/md";


export const ItemListContainer = () => {
  const { products } = useProducts();

  

  return (
    <div className="container-fluid p-0  ">
      <ItemFrontPage/>
      <Nav className="justify-content-center mt-4 py-4 " activeKey="/catalogo">
        <Nav.Item className="me-4  ">
          <Link to="/catalogo" className=" link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-50-hover text-decoration-none"> Todos</Link>
        </Nav.Item>
        <Nav.Item className="me-4 ">
          <Link to="/catalogo/higiene" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-50-hover text-decoration-none "> <RiHandSanitizerLine className="me-1 mb-1"/> Higiene</Link>
        </Nav.Item>
        <Nav.Item className="me-4 ">
          <Link to="/catalogo/accesorios" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-50-hover text-decoration-none "> <BsUniversalAccess className="me-1 mb-1"/>Accesorios</Link>
        </Nav.Item>

        <Nav.Item className="me-4 ">
          <Link to="/catalogo/juguetes" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-50-hover text-decoration-none "> <TbHorseToy className="me-1 mb-1"/>Juguetes </Link>
        </Nav.Item>
        <Nav.Item className="me-4 ">
          <Link to="/catalogo/alimento" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-50-hover text-decoration-none "> <IoFastFoodOutline className="me-1 mb-1"/> Alimento</Link>
        </Nav.Item>
        <Nav.Item className="me-4 ">
          <Link to="/catalogo/medicina" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-50-hover text-decoration-none "> <MdOutlineMedicalServices className="me-1 mb-1"/> Medicina</Link>
        </Nav.Item>
      </Nav>

      <ItemList  items={products} />
    </div>
  );
};
