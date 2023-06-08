

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const ItemCard = ({nombre, descripcion,precio,img}) => {
    return(



  
    <Card style={{ width: '12rem' }} className='me-2 mb-2 mt-5'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
      {descripcion}
        </Card.Text>
        <Card.Text>
       Precio: {precio}
        </Card.Text>
        <div>
        <Button>+</Button>
     0
     <Button>-</Button>
 
        </div>
        <Button>Agregar al carrito</Button>
      </Card.Body>
    </Card>




        // <div className="col-3 m-2 border">
        //     <img className="w-75" src={img} alt="" />
        //   <h4>{nombre}</h4>
        //   <p>{descripcion}</p>
        //   <p>Precio:{precio}</p>
        //   </div>

    )
}