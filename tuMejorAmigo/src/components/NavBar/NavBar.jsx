import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink } from "./NavLink"
import { NavLogin } from "./NavLogin"
import { Logo } from "../../../public/Logo/Logo";
import {Container, Form, Nav, Navbar,Offcanvas} from "react-bootstrap";
import { Link } from "react-router-dom";






// export const NavBar = () => {

//     return(
//         <>
        
//         <header>
//       <nav
//         className="navbar navbar-expand-lg navbar-expand-sm navbar-light shadow  bg-light py-1 px-md-3"
//       >
//         <div className="container-fluid">
//           <span
//             className="navbar-brand px-2"
//             href="index.html"
//             alt="Nombre de la pagina"
//           >
//             <NavLogo/>
          
//           </span>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarText"
//             aria-controls="navbarText"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarText">
           
//             <ul className="navbar-nav mb-2 mb-lg-0 w-lg-25 ms-0 ms-lg-auto">
//           <NavList text = "Ser cuidador"/> 
//           <NavList text = "Registrarse"/> 
//               <CartWidget/>
//             </ul>

//             <span className="navbar-text"></span>
//             <div className="d-grid gap-2 d-md-flex justify-content-md-end">
//             <NavLogin textLogin={ " Iniciar Sesión"} />
          
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//         </>
//     )
// }




export function NavBar({variant = false}) {
  return (
    <>
   
      {[  'xxl'].map((expand) => (
        <Navbar key={expand}  expand={expand} className={variant  ? "d-none" : "  px-3 shadow"}>
          <Container fluid>
            <Link to="/">   <Logo /> </Link>
 
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Logo/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink /> 
        
                </Nav>
                <Form className="d-flex pt-2 ">
                <NavLogin  textLogin={ " Iniciar Sesión"} />
           <CartWidget/>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}


