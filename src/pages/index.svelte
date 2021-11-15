<script>
  // Import component
  import NavbarComponent from "$cComponent/navbarComponent.svelte";
  import TitleHome from "$components/home/TitleHome.svelte";
  import { svelteIcon, imgHome } from "$utils/constantes";
</script>

<div class="index">
  <NavbarComponent />

  <div class="container">
    <TitleHome
      img={svelteIcon}
      bigImg={imgHome}
      title="PokeWeb powered by Svelte"
    />
  </div>
</div> 

<style>
  .container {
    margin-top: 7em;
    text-align: center;
  }
</style>
