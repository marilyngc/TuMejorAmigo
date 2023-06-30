import { useEffect } from "react";

const SelectSize = ({ setSize, options }) => {
  const handleSelect = (e) => {
    setSize(e.target.value);
  };

  useEffect(() => {
    if (options && options.length > 0) {
      setSize(options[0].value);
    }
  }, [options, setSize]);

  //En este código actualizado, se verifica si options existe y tiene elementos antes de establecer el estado size. Además, se incluye options y setSize como dependencias en el arreglo de dependencias de useEffect, lo que asegura que el efecto se ejecute cuando cambien estas propiedades.
  return (
    <div>
      <select onChange={handleSelect}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectSize;
