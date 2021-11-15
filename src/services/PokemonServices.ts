export async function getPoke(inputSearch: string) {
  let listType = [];
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${inputSearch}`
  ).then((response) => response);

  if (!response.ok) {
    console.log("error");
    return "Error!";
  } else {
    let json_response = await response.json();
    return json_response;
  }
}
