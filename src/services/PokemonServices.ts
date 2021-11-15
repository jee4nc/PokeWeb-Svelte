import _ from "lodash";

export async function getPokemon(inputSearch: string) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${inputSearch}`
    );
    if (!response.ok) {
      throw "Error in request!";
    }

    // Encapsular esto en una funcion aparte para separar responsabilidades
    const data: any = await response.json();
    console.log(data);

    const { front_default } = data?.sprites;
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
