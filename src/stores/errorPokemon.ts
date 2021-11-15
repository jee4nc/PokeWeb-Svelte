import { writable } from "svelte/store";
import { errorIMG } from "$utils/constants";

export const errorPokemonDefault = writable({
  name: "Invalid Name",
  height: 0,
  front_default: errorIMG,
  weight: 0,
  base_experience: 0,
});
