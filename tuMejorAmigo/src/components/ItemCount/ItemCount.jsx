import { useState } from "react";
import { Button } from "react-bootstrap";


const ItemCount = ({ max, init = 0 }) => {
  const [count, setCount] = useState(init);
  const handlAdd = () => count < max && setCount(count + 1);
  const handlSubtract = () => count > 0 && setCount(count - 1);

  return (
    <div>
      <Button
        variant="outline-primary"
        onClick={handlSubtract}
        className="btn-outline-info"
      >
        -
      </Button>
      <Button variant="" className="border mx-4 px-5">
        {count}
      </Button>
      <Button
        variant="outline-primary"
        onClick={handlAdd}
        className="btn-outline-info"
      >
        +
      </Button>
    </div>
  );
};

export default ItemCount;
