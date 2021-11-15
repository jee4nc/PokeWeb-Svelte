<script>
  export let pokemon = {};
  import { imgDefault } from "$utils/constants";
  import { afterUpdate } from "svelte";

  // let listType = [];
  export let classessCard = "";
  // Sacalo de aqui to servicio
  // let getTypes = function (input) {
  //   listType = [];
  //   if (pokemon.name) {
  //     let types1 = input.types;
  //     let array1 = Object.keys(types1).map((key) => [Number(key), types1[key]]);
  //     for (let i = 0; i < array1.length; i++) {
  //       listType.push(array1[i][1].type.name);
  //     }
  //   }
  // };

  afterUpdate(() => {
    // getTypes(pokemon);
  });
</script>

<div style="text-align: center; margin-top:2.5rem" class={classessCard}>
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
        <!-- <p class="card-text">
          Type: {listType}
        </p> -->
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
