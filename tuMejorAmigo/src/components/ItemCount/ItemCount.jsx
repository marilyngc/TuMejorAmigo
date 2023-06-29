
import { Button } from "react-bootstrap";


const ItemCount = ({ max, counter,setCounter,handleAggregate}) => {


  const handlAdd = () => counter < max && setCounter(counter + 1);
  const handlSubtract = () => counter > 0 && setCounter(counter - 1);
  
  return (
    <div>
      <Button
        variant="outline-primary"
        onClick={handlSubtract}
        className="btn-outline-info"
      >
        -
      </Button>
      <span variant="" className="border mx-4 px-5">
        {counter}
      </span>
      <Button
        variant="outline-primary"
        onClick={handlAdd}
        className="btn-outline-info"
      >
        +
      </Button>
      <br />
      <Button className="btn-outline-info mt-2" onClick={handleAggregate}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
