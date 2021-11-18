<script lang="ts">
  import BackButton from "$share/BackButton.svelte";
  import DivTitle from "$share/DivTitle.svelte";
  import Card from "$components/list/Card.svelte";
  import RadioButtons from "$components/search/RadioButtons.svelte";

  import { getPokemon } from "$services/pokemon";
  import { versusLogo, imgTitleSearch, baseLink } from "$constants/links";
  import { errorPokemonDefault } from "$constants/errors";
  import { pokemons } from "$store/search";
  import { battleFunction } from "$services/battle";

  let labelInput: string = "Search your pokemon";
  let searchName: string = "";
  let selectedPokemon: number;

  function assignPokemon(pokemon: any) {
    if ($pokemons.length == 0) {
      $pokemons = [...$pokemons, pokemon];
    } else {
      $pokemons[selectedPokemon] = pokemon;
    }
    searchName = "";
  }

  async function actionSearchButton() {
    try {
      const receivedPokemon = await getPokemon(searchName);
      assignPokemon(receivedPokemon);
    } catch {
      assignPokemon(errorPokemonDefault);
    }
  }

  function newPokemon() {
    $pokemons = [...$pokemons, {}];
  }
</script>

<div class="index">
  <BackButton link={baseLink} />
  <DivTitle img={imgTitleSearch} title="Pokemon Versus" />
  <div class="searchBar row">
    <div class="col-4" />
    <div class="col-4 card-div">
      <div style="display: flex;">
        <form on:submit|preventDefault={actionSearchButton} style="width:100%">
          <input
            type="text"
            class="form-control"
            placeholder={labelInput}
            aria-label="Username"
            aria-describedby="basic-addon1"
            bind:value={searchName}
          />
        </form>
        <button on:click={newPokemon}> add </button>
      </div>
      <div class="margincito">
        <RadioButtons bind:value={selectedPokemon} />
        {#if $pokemons.length > 1}
          <button on:click={() => battleFunction($pokemons)}>Figh!</button>
        {/if}
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row testing">
      {#each $pokemons as pokemon, i}
        <Card classessCard="col-4" {pokemon} />
        {#if i + 1 != $pokemons.length}
          <div class="col-4 vsClass">
            <img
              class="animate__animated animate__bounce"
              src={versusLogo}
              alt="VS"
              style="max-width: 100%;"
            />
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
  .card-div {
    text-align: center;
  }
  .container {
    margin-top: 5em;
  }
  .margincito {
    padding-top: 10px;
  }
  .vsClass {
    text-align: center;
  }
</style>
