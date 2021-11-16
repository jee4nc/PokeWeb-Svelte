import { writable } from "svelte/store";

export const pokemonVersus1 = writable({
  name: "No hay nombre",
  height: 0,
  front_default: "",
  weight: 0,
  base_experience: 0,
});

export const pokemonVersus2 = writable({
  name: "No hay nombre",
  height: 0,
  front_default: "",
  weight: 0,
  base_experience: 0,
});
