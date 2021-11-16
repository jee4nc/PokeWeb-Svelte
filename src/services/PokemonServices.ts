import _ from "lodash";
import { errorPokemonDefault } from "$src/stores/errorPokemon";
// TODO: I should create const with error default object

export async function extractData(response) {
  if (!response.ok) {
    throw "Error in request!";
  }
  try {
    const data: any = await response.json();
    const types = await getTypes(data);
    const { front_default } = data.sprites;
    const filteredData = _.pick(data, [
      "name",
      "height",
      "weight",
      "base_experience",
    ]);
    const result = { ...filteredData, front_default, types };
    return result;
  } catch (err) {
    // FIXME: Arregla esto, deberia retornar algo en concreto, no un void Object
    return {};
  }
}

export function getTypes(data) {
  let arrayHandler = [];
  let typesArray = data.types;
  for (let type of typesArray) {
    arrayHandler.push(type.type.name);
  }
  return arrayHandler;
}

export async function getPokemon(inputSearch: string) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${inputSearch}`
    );
    return extractData(response);
  } catch (err) {
    console.error(err);
    // FIXME: Arregla esto, deberia retornar algo en concreto, no un void Object
    return {};
  }
}
