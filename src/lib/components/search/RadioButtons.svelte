<script lang="ts">
  import { pokemons } from "$store/search";

  export let value: number = 0;

  function removePokemon(index: number) {
    $pokemons.splice(index, 1);
    $pokemons = $pokemons;
  }
</script>

<div
  class="btn-group"
  role="group"
  aria-label="Basic radio toggle button group"
>
  {#each $pokemons as pokemon, i}
    <input
      type="radio"
      id={"btnradio" + i}
      class="btn-check"
      name="radioButton"
      value={i}
      bind:group={value}
    />
    <label class="btn btn-outline-danger" for={"btnradio" + i}>
      <i class="fas fa-angry" />
      {pokemon.name ? pokemon.name : i + 1 + "º Pokemon"}
    </label>
    <button
      class="btn btn-secondary"
      style="margin-right: 5px;"
      on:click={() => removePokemon(i)}
    >
      <strong>-</strong></button
    >
  {/each}
</div>
