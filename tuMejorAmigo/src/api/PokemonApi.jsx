import { useState } from "react";
import { Button } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch";
    
export const PokemonApi = () => {
 
  const [id, setId] = useState(1);
  const {data: pokemon} = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`, [id])
 
  const handleSiguiente = () => id < 300 && setId(id + 1);
  const handleAnterior = () => id > 1 && setId(id - 1);
  return (
    <div>
      <h2>Pokemon</h2>

      <hr />

      {pokemon && (
        <div>
          <h4>{pokemon.name}</h4>
          <img src={pokemon.sprites.front_default} alt="" />
        </div>
      )}
      <hr />
      <Button onClick={handleAnterior}>Anterior</Button>
      <Button onClick={handleSiguiente}>Siguiente</Button>
    </div>
  );
};
