


import {ListGroup } from "react-bootstrap";

const link = ["Ser cuidador", "Registrarme"];





export const NavLink=  () => {
  return (
    <ListGroup horizontal className='nav-item mx-3 my-0'>
     { link.map((text,index) => (
   <ListGroup className='nav-link' key={index}> {text}</ListGroup>
))}
   
    
     
    
    </ListGroup>
  );
}

