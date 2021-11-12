<script>
  export let pokemon = {};
  export let actionFunc;
</script>

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..." />
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
    <button class="btn btn-primary" on:click={() => actionFunc(pokemon)}>
      Obtener
    </button>
  </div>
</div>
