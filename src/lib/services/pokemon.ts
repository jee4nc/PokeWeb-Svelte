import _ from "lodash";

export async function extractData(response: any) {
  if (!response.ok) {
    throw "Error in request!";
  }

  try {
    const data: any = await response.json();
    const types = getTypes(data);
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

export function getTypes(data: any) {
  let arrayHandler = [];
  let typesArray = data.types;
  for (let type of typesArray) {
    arrayHandler.push(type.type.name);
  }
  return arrayHandler;
}

export async function getPokemon(namePokemon: string) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${namePokemon.toLowerCase()}`
    );
    return extractData(response);
  } catch (err) {
    console.error(err);
    // FIXME: Arregla esto, deberia retornar algo en concreto, no un void Object
    return {};
  }
}
