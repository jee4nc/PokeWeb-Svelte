<script lang="ts">
  import Card from "$components/list/Card.svelte";
  import { getPokemon } from "$services/pokemon";
  import { errorPokemonDefault } from "$constants/errors";

  let labelInput: string = "Search here!";
  let buttonMessage: string = "Search";
  let pokemon = {};
  let namepokemon: string = "";
  let isError = false;

  async function handleSubmit() {
    try {
      const receivedPokemon = await getPokemon(namepokemon.toLowerCase());
      pokemon = receivedPokemon;
      isError = false;
      namepokemon = "";
    } catch {
      isError = true;
      pokemon = errorPokemonDefault;
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
          class:input-error={isError}
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
<Card {pokemon} />

<style>
  .div-row {
    justify-content: center;
  }
  .card-div {
    text-align: center;
  }
  .input-error {
    border: 4px solid red;
  }
</style>
