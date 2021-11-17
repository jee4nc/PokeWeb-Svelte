<script lang="ts">
  import { imgDefault } from "$constants/links";

  export let pokemon: any;
  export let classessCard = "";
</script>

<div style="text-align: center;" class={classessCard}>
  <div class="card card_poke" style="width: 18rem; margin:auto">
    {#if !pokemon.name}
      <img src={imgDefault} class="card-img-top" alt="..." />
    {:else}
      <img
        src={pokemon.front_default}
        class="card-img-top"
        alt="No hay imagen"
      />
    {/if}
    <div class="card-body">
      {#if pokemon.name}
        <h5 class="card-title">Name: {pokemon.name}</h5>
        <p class="card-text">
          Height: {pokemon.height * 10} cm
        </p>
        <p class="card-text">
          Weight: {(pokemon.weight * 100) / 1000} Kg
        </p>
        <p class="card-text">
          Type: {pokemon.types}
        </p>
      {:else}
        <h5 class="card-title">No hay nombre</h5>
        <p class="card-text">No hay tamaño</p>
      {/if}
    </div>
  </div>
</div>

<style>
  .card_poke {
    box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.57);
    -webkit-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.57);
  }
</style>
