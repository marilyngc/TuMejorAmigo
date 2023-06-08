import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
    
export const PokemonApi = () => {
  const [pokemon, setPokemon] = useState(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resp) => resp.json()) // es asincronico y retornar otra respuesta
      .then((data) => {
        setPokemon(data);
      });
  }, [id]);
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
