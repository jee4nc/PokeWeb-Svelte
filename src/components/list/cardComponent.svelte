<script>
  export let pokemon = {};
  import { imgDefault } from "$utils/constantes"
</script>

<div style="text-align: center; margin-top:3rem">
  <div class="card" style="width: 18rem; margin:auto">
    {#if !pokemon.name}
      <img src={imgDefault} class="card-img-top" alt="..." />
    {:else}
      <img
        src={pokemon.sprites.front_default}
        class="card-img-top"
        alt="No hay imagen"
      />
    {/if}
    <div class="card-body">
      {#if pokemon.name}
        <h5 class="card-title">{pokemon.name}</h5>
        <p class="card-text">
          {pokemon.height}
        </p>
      {:else}
        <h5 class="card-title">No hay nombre</h5>
        <p class="card-text">No hay tamaño</p>
      {/if}
    </div>
  </div>
</div>

