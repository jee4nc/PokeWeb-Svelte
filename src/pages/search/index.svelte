<script lang="ts">
  import BackButton from "$share/BackButton.svelte";
  import DivTitle from "$share/DivTitle.svelte";
  import Card from "$components/list/Card.svelte";
  import RadioButtons from "$components/search/RadioButtons.svelte";

  import { getPokemon } from "$services/pokemon";
  import { versusLogo, imgTitleSearch, baseLink } from "$constants/links";
  import { errorPokemonDefault } from "$constants/errors";
  import { radioValues } from "$constants/search";

  let labelInput: string = "Search your pokemon";
  let namePokemon: string = "";
  let valueRadioButton: number;

  let pokemons = [];

  for (let valueButton in radioValues) {
    pokemons[valueButton] = {};
  }

  function assignPokemon(pokemon: any) {
    pokemons[valueRadioButton] = pokemon;
  }

  async function actionSearchButton() {
    try {
      const receivedPokemon = await getPokemon(namePokemon);
      assignPokemon(receivedPokemon);
      namePokemon = "";
    } catch {
      assignPokemon(errorPokemonDefault);
      namePokemon = "";
    }
  }
</script>

<div class="index">
  <BackButton link={baseLink} />
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
          bind:value={namePokemon}
        />
        <!-- bindRadioButton get the value of child component -->
        <div class="margincito">
          <RadioButtons bind:radioButton={valueRadioButton} />
        </div>
      </form>
    </div>
  </div>
  <div class="container">
    <div class="row testing">
      {#each Object.entries(pokemons) as [key, values], i}
        <Card classessCard="col-4" pokemon={values} />
        {#if i + 1 != Object.entries(pokemons).length}
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
