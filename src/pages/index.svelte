<script>
  // Import component
  import TitleHome from "$components/home/TitleHome.svelte";
  import { svelteIcon, imgHome } from "$utils/constants";
</script>

<div class="index">
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
