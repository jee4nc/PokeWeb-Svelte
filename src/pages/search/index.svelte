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
    imgFight,
  } from "$utils/constants";

  let labelInput = "Search your pokemon";
  let namepokemon = "";
  // valueRadioButton is the value from child radioButton to this father component
  let valueRadioButton;
  let pk = {};

  for (let valueButton in radioValues) {
    pk[radioValues[valueButton]] = {};
  }

  function assignPokemon(pokemon) {
    pk[valueRadioButton] = pokemon;
  }

  function sendAlert() {
    alert("Trigger fight");
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
        <!-- bindRadioButton get the value of child component -->
        <div class="margincito">
          <RadioButtons bind:radioButton={valueRadioButton} />
        </div>
      </form>
    </div>
  </div>
  <div class="container">
    <div class="row testing">
      <CardComponent classessCard="col-4" pokemon={pk[radioValues.left]} />
      <div class="col-4 vsClass">
        <img
          class="animate__animated animate__bounce"
          src={versusLogo}
          alt="VS"
          style="max-width: 100%;"
        />

        <button
          type="button"
          class="btn btn-outline-danger btn-lg"
          on:click={sendAlert}
        >
          <img src={imgFight} alt="" style="max-width: 42px;" />
          <strong>Fight</strong>
          <img src={imgFight} alt="" style="max-width: 42px;" /></button
        >
      </div>
      <CardComponent classessCard="col-4" pokemon={pk[radioValues.rigth]} />
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
