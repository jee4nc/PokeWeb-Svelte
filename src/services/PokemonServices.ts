export async function getPoke(inputSearch: string) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${inputSearch}`
  ).then((response) => response);

  if (!response.ok) {
    console.log("error");
    return "Error!";
  } else {
    return await response.json();
  }
}
