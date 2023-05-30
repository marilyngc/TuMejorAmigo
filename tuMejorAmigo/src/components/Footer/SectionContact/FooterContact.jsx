import { Card,Figure } from "react-bootstrap";
import { Contacts } from "../Data";
import { Fragment } from 'react';

export const FooterContact = () => {
  const listItems = Contacts.map((item) => (

    <div key={item.id} className=" d-flex col ">  
    
      
    <Fragment >
    {item.icon}
    </Fragment>
    <div  className="ms-lg-3 mb-4 mb-lg-0 py-1 ">
         <Card.Title className="mt-0 fw-bold pb-1">{item.subtitle}</Card.Title>
          <Card.Text className="text-secondary">{item.paragraph}</Card.Text>
   
         </div>

        
         
    </div>  ));

  return(
    <Card.Body className="d-flex row" >{listItems}</Card.Body>
  )
};
