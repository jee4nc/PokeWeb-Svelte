<script lang="ts">
  import BackButton from "$share/BackButton.svelte";
  import DivTitle from "$share/DivTitle.svelte";
  import Card from "$components/list/Card.svelte";
  import RadioButtons from "$components/search/RadioButtons.svelte";

  import { getPokemon } from "$services/pokemon";
  import { imgTitleSearch, baseLink } from "$constants/links";
  import { errorPokemonDefault } from "$constants/errors";
  import { pokemons } from "$store/search";
  import { battleFunction } from "$services/battle";
  import LogoFightButton from "$src/lib/components/search/LogoFightButton.svelte";

  let labelInput: string = "Search your pokemon";
  let searchName: string = "";
  let selectedPokemon: number;
  let battleResult: boolean | string = false;
  let isError = false;

  let showFightBtn = false;

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
      handleFight();
    } catch {
      isError = false;
      assignPokemon(errorPokemonDefault);
    }
  }

  function newPokemon() {
    $pokemons = [...$pokemons, {}];
  }

  function getWinnerPokemon() {
    let winner = battleFunction($pokemons);
    for (let i = 0; i < $pokemons.length; i++) {
      if (winner.name === $pokemons[i].name) {
        pokemons.set([winner]);
      }
    }
    battleResult = "THE WINNER IS : ";
    setTimeout(() => {
      battleResult = false;
      pokemons.set([]), (showFightBtn = false);
    }, 4000);
  }

  const handleFight = () => {
    for (let i = 0; i < $pokemons.length; i++) {
      if ($pokemons[i].name === "Invalid Name") {
        showFightBtn = false;
        return;
      }
      if (!$pokemons[i].name) {
        showFightBtn = false;
        return;
      }
      if ($pokemons.length < 2) {
        showFightBtn = false;
        return;
      }
      showFightBtn = true;
    }
  };
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
            class:input-error={isError}
            placeholder={labelInput}
            aria-label="Username"
            aria-describedby="basic-addon1"
            bind:value={searchName}
          />
        </form>
        {#if $pokemons.length < 9}
          <button
            class="btn btn-danger"
            style="margin-left: 1em;"
            on:click={newPokemon}
          >
            add
          </button>
        {/if}
      </div>
    </div>
  </div>
  <div class="margincito">
    <RadioButtons bind:value={selectedPokemon} />
    <div>
      {#if showFightBtn}
        <button
          class="btn btn-danger"
          style="margin-top: 7px;"
          on:click={getWinnerPokemon}
        >
          <LogoFightButton />
          Figth!
          <LogoFightButton />
        </button>
      {/if}
    </div>
  </div>
  <div class="container">
    <div class="row testing">
      {#if battleResult}
        <h1>{battleResult}</h1>
      {/if}
      {#each $pokemons as pokemon}
        <Card classessCard="col-4" {pokemon} />
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
    text-align: center;
  }
  .input-error {
    border: 4px solid red;
  }
</style>
