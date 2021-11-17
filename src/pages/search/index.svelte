<script>
  // Import component
  import BackButtonComponent from "$share/backButtonComponent.svelte";
  import DivTitle from "$share/DivTitle.svelte";
  import CardComponent from "$components/list/cardComponent.svelte";
  import RadioButtons from "$components/search/radioButtons.svelte";
  import { getPokemon } from "$services/pokemonServices";
  import {
    versusLogo,
    imgTitleSearch,
    baseLink,
    errorPokemonDefault,
    radioValues,
  } from "$utils/constants";

  let labelInput = "Search your pokemon";
  let namepokemon = "";
  let valueRadioButton;

  let pk = [];

  for (let valueButton in radioValues) {
    pk[valueButton] = {};
  }

  function assignPokemon(pokemon) {
    pk[valueRadioButton] = pokemon;
  }

  async function actionSearchButton() {
    try {
      const receivedPokemon = await getPokemon(namepokemon);
      assignPokemon(receivedPokemon);
      namepokemon = "";
    } catch {
      assignPokemon(errorPokemonDefault);
      namepokemon = "";
    }
  }
</script>

<div class="index">
  <BackButtonComponent link={baseLink} />
  <DivTitle img={imgTitleSearch} title="Pokemon Versus" />
  <div class="searchBar row">
    <div class="col-4" />
    <div class="col-4 card-div">
      <form on:submit|preventDefault={actionSearchButton}>
        <input
          type="text"
          class="form-control"
          placeholder={labelInput}
          aria-label="Username"
          aria-describedby="basic-addon1"
          bind:value={namepokemon}
        />
        <div class="margincito">
          <RadioButtons bind:radioButton={valueRadioButton} />
        </div>
      </form>
    </div>
  </div>
  <div class="container">
    <div class="row testing">
      {#each Object.entries(pk) as [key, values], i}
        <CardComponent classessCard="col-4" pokemon={values} />
        {#if i + 1 != Object.entries(pk).length}
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
</style>
