import _ from "lodash";

export async function extractData(response) {
  if (!response.ok) {
    throw "Error in request!";
  }
  try {
    const data: any = await response.json();
    const { front_default } = data.sprites;
    const filteredData = _.pick(data, [
      "name",
      "height",
      "weight",
      "base_experience",
    ]);
    const result = { ...filteredData, front_default };
    return result;
  } catch (err) {
    console.error(err);
    return {};
  }
}
// Need function to handler error
export async function getPokemon(inputSearch: string) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${inputSearch}`
    );
    return extractData(response);
  } catch (err) {
    console.error(err);
    return {};
  }
}
