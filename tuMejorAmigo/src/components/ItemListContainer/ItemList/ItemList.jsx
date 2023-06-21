
import { ItemCard } from "../../ItemCard/ItemCard";


export const ItemList = ({ items }) => {

  
  return (
    <div className="row">
      {items.length === 0
        ? "Cargando datos..."
        : items.map(
            (elem) => <ItemCard key={elem.id} {...elem} /> // el map retorna un nuevo array
          )}
    </div>
  );
};
