<script lang="ts">
  import type { Pokemon } from "@interfaces/PokemonInterface";
  import { getPoke } from "@services/PokemonServices";
  import NavbarComponent from "@ccomponents/navbarComponent.svelte";
  import CardComponent from "@components/list/cardComponent.svelte";
  import BackButtonComponent from "@ccomponents/backButtonComponent.svelte";

  const link = "./";
  const titleB = "Back";
  let pokemon: Pokemon = {
    name: "",
    height: 0,
    base_experience: 0,
  };

  async function action(input) {
    pokemon = await getPoke(input);
    console.log("Aca es => ", pokemon);
  }
</script>

<NavbarComponent />
<BackButtonComponent {link} titleButton={titleB} />
<h1>Pokemon List Component Here!</h1>
<br />

<CardComponent {pokemon} actionFunc={action} />
