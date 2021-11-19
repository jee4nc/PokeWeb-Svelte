export const battleFunction = function (pokemonList: Array<any>) {
  return getPokemonForBattle(pokemonList);
};

export const getPokemonForBattle = function (pokemonList: Array<any>) {
  let firstPokemon: any;
  let nextPokemon: any;

  for (let i = 0; i < pokemonList.length; i++) {
    if (i === 0) {
      firstPokemon = pokemonList[i];
    }
    if (i > 0) {
      nextPokemon = pokemonList[i];
      firstPokemon = getWinner(firstPokemon, nextPokemon);
    }
  }
  return firstPokemon;
};

export const debilities = {
  fire: "water ground rock",
  rock: "fighting ground steel",
  normal: "rock ghost steel",
  fighing: "flying poison psychic bug ghost fairy",
  flying: "rock steel electric",
  poison: "ground rock gosht steel",
  ground: "flying bug grass",
  bug: "fighting flying poison ghost steel fire fairy",
  ghost: "dark",
  steel: "fire water electric",
  water: "grass dragon",
  grass: "flying poison bug steel fire dragon",
  electric: "ground grass dragon",
  psychic: "steel dark",
  ice: "steel fire water",
  dragon: "steel fairy",
  fairy: "poison steel fire",
  dark: "fighting fairy",
};

export const evaluateBattle = function (firstPokemon: any, secondPokemon: any) {
  let defeated = false;
  const baseDamageFirstPokemon = firstPokemon.baseStats;
  const baseDamageSecondPokemon = secondPokemon.baseStats;
  const diffenceBaseDamage = baseDamageFirstPokemon - baseDamageSecondPokemon;

  // TODO: Esto solo toma en consideracion el elemento principal. No los secundarios
  if (debilities[firstPokemon.types[0]].includes(secondPokemon.types[0])) {
    if (diffenceBaseDamage >= 12) {
      return defeated;
    }
    defeated = true;
  } else {
    if (baseDamageFirstPokemon < baseDamageSecondPokemon) {
      defeated = true;
      return defeated;
    }
  }
  return defeated;
};

export const getWinner = function (pokemon1: any, pokemonToCompare: any) {
  if (
    debilities[pokemon1.types[0]] &&
    evaluateBattle(pokemon1, pokemonToCompare)
  ) {
    return pokemonToCompare;
  } else {
    return pokemon1;
  }
};

export const verifyCompetitors = function () {};
