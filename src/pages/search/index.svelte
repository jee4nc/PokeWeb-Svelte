<script>
  // Import component
  import BackButtonComponent from "$cComponent/backButtonComponent.svelte";
  import NavbarComponent from "$cComponent/navbarComponent.svelte";
  import CardComponent from "$components/list/cardComponent.svelte";
  import RadioButtons from "$components/search/radioButtons.svelte";
  import { versusLogo } from "$utils/constantes";
  const link = "./";
  export let labelInput = "Search your pokemon";
  let buttonMessage = "Search";
  let namepokemon = "";
  function actionButton() {
    alert("Hola");
  }
</script>

<NavbarComponent />
<BackButtonComponent {link} />
<div style="text-align: center;">
  <h1>Pokemon Versus 💥</h1>
</div>
<div class="searchBar row">
  <div class="col-4" />
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
    <RadioButtons />
    <br />
    <br />
    <button type="button" class="btn btn-danger" on:click={() => actionButton()}
      >{buttonMessage}
      <i class="fas fa-search" /></button
    >
  </div>
</div>
<div class="container">
  <div class="row">
    <CardComponent classessCard="col-4" />
    <div class="col-4 vsClass">
      <img src={versusLogo} alt="VS" style="max-width: 100%;" />
    </div>
    <CardComponent classessCard="col-4" />
  </div>
</div>

<style>
  .card-div {
    text-align: center;
  }
  .container {
    margin-top: 5em;
  }
</style>
