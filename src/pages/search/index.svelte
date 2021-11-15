<script>
  // Import component
  import BackButtonComponent from "$cComponent/backButtonComponent.svelte";
  import NavbarComponent from "$cComponent/navbarComponent.svelte";
  import CardComponent from "$components/list/cardComponent.svelte";
  import { versusLogo } from "$utils/constantes";
  const link = "./";
</script>

<NavbarComponent />
<BackButtonComponent {link} />
<div style="text-align: center;">
  <h1>Pokemon Versus 💥</h1>
</div>
<div class="container">
  <div class="row">
    <CardComponent classessCard="col-4" />
    <div class="col-4 vsClass">
      <div class="container">
        <img src={versusLogo} alt="VS" />
      </div>
    </div>
    <CardComponent classessCard="col-4" />
  </div>
</div>

<style>
  .vsClass > div {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 50%;
    text-align: center;
  }
  .container {
    margin-top: 10em;
  }
</style>
