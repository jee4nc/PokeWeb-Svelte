import type { Pokemon } from "src/interfaces/PokemonInterface";

export function getPoke(pokemon: Pokemon) {
  return fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) =>
    response.json()
  );
}
