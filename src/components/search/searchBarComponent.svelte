<script lang="ts">
  import CardComponent from "$components/list/cardComponent.svelte";
  import type { Pokemon } from "$interfaces/PokemonInterface";
  import { getPoke } from "$services/PokemonServices";

  export let labelInput = "RandomMessage";
  export let buttonMessage = "Search!";
  let pokemon: Pokemon = {
    name: "",
    height: 0,
    base_experience: 0,
  };
  let namepokemon: string = "";

  async function actionButton(input) {
    let something: Object | String = await getPoke(input);
    if (typeof something === "string" || something instanceof String) {
      alert("El nombre del pokemon no es valido");
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
      <input
        type="text"
        class="form-control"
        placeholder={labelInput}
        aria-label="Username"
        aria-describedby="basic-addon1"
        bind:value={namepokemon}
      />
      <br />
      <button
        type="button"
        class="btn btn-primary"
        on:click={() => actionButton(namepokemon)}>{buttonMessage}</button
      >
    </div>
  </div>
</div>
<div>
  <CardComponent {pokemon} />
</div>

<style>
  .div-row {
    justify-content: center;
  }
  .card-div {
    text-align: center;
  }
</style>
