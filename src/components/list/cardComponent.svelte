<script>
  export let pokemon = {};
</script>

<div class="card" style="width: 18rem;">
  {#if !pokemon.name}
    <img src="" class="card-img-top" alt="..." />
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
