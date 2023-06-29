import { useEffect } from "react";

const SelectSize = ({setSize,options}) => {



    const handleSelect = (e) => {
        setSize(e.target.value);

      };

useEffect(()=> {
 setSize(options[0].value)
},[])
    return(
        <select onChange={handleSelect}>
         {
            options.map((option) => <option key={option.value} value={option.value}> {option.value} </option>)
         }
          </select>
    )
}

export default SelectSize