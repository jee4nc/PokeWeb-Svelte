<script lang="ts">
  import CardComponent from "$components/list/cardComponent.svelte";
  import type { Pokemon } from "$interfaces/PokemonInterface";
  import { getPokemon } from "$services/PokemonServices";

  export let labelInput = "RandomMessage";
  export let buttonMessage = "Search";
  let pokemon: Pokemon = {
    name: "",
    height: 0,
    base_experience: 0,
  };
  let namepokemon: string = "";

  // Make loading component
  async function handleSubmit() {
    // event.preventDefault()
    let something: Object | String = await getPokemon(
      namepokemon.toLowerCase()
    );
    if (typeof something === "string" || something instanceof String) {
      namepokemon = "";
      pokemon = {
        name: "",
        height: 0,
        base_experience: 0,
      };
    } else {
      pokemon = something;
      namepokemon = "";
    }
  }
</script>

<div class="container">
  <div class="row div-row">
    <div class="col-4 card-div">
      <form on:submit|preventDefault={handleSubmit}>
        <input
          type="text"
          class="form-control"
          placeholder={labelInput}
          aria-label="Username"
          aria-describedby="basic-addon1"
          bind:value={namepokemon}
        />
        <br />
        <button type="submit" class="btn btn-danger"
          >{buttonMessage}
          <i class="fas fa-search" /></button
        >
      </form>
    </div>
  </div>
</div>
<CardComponent {pokemon} />

<style>
  .div-row {
    justify-content: center;
  }
  .card-div {
    text-align: center;
  }
</style>
