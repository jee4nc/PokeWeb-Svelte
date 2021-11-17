<script lang="ts">
  import TitleHome from "$components/home/TitleHome.svelte";
  import { svelteIcon, imgHome } from "$constants/links";
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
