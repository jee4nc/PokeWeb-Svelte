<script lang="ts">
  import CardComponent from "$components/list/cardComponent.svelte";
  import { getPokemon } from "$services/pokemonServices";
  import { errorPokemonDefault } from "$src/stores/errorPokemon";
  // import { errorHandler } from "$utils/sharedFunctions";

  export let labelInput = "Search here!";
  export let buttonMessage = "Search";
  let colorError = "";
  let classInput = "form-control";
  let pokemon = {};
  let namepokemon: string = "";

  // Make loading component
  async function handleSubmit() {
    // event.preventDefault()
    // FIX validation if request its succesfully
    // Change names of var
    try {
      const receivedPokemon = await getPokemon(namepokemon.toLowerCase());
      pokemon = receivedPokemon;
      namepokemon = "";
    } catch {
      await errorHandler();
      pokemon = $errorPokemonDefault;
      namepokemon = "";
    }
  }
  async function errorHandler() {
    labelInput = "Invalid pokemon Name";
    colorError = "border : 2px solid red";
    classInput = "form-control animate__animated animate__shakeX";
    setTimeout(() => {
      labelInput = "Search here!";
      colorError = "";
      classInput = "form-control";
    }, 3000);
  }
</script>

<div class="container">
  <div class="row div-row">
    <div class="col-4 card-div">
      <form on:submit|preventDefault={handleSubmit}>
        <input
          type="text"
          class={classInput}
          style={colorError}
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
