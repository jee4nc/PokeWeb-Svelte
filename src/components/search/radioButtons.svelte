<script>
  import { radioCheck1, radioCheck2 } from "$src/stores/radioButtonVersus";
  const clickedButton1 = function () {
    radioCheck1.update((n) => (n = !n));
    if ($radioCheck1 === true) {
      radioCheck2.update((n) => (n = false));
    }
    console.log("El valor de 1 es: ", $radioCheck1);
    console.log("El valor de 2 es: ", $radioCheck2);
  };
  const clickedButton2 = function () {
    radioCheck2.update((n) => (n = !n));
    if ($radioCheck2 === true) {
      radioCheck1.update((n) => (n = false));
    }
    console.log("El valor de 2 es: ", $radioCheck2);
    console.log("El valor de 1 es: ", $radioCheck1);
  };
</script>

<div
  class="btn-group"
  role="group"
  aria-label="Basic radio toggle button group"
>
  <input
    type="radio"
    class="btn-check"
    name="btnradio"
    id="btnradio1"
    autocomplete="off"
    on:click={clickedButton1}
    bind:group={$radioCheck1}
  />
  <label class="btn btn-outline-danger" for="btnradio1">
    <i class="fas fa-chevron-left" />
    Left pokemon</label
  >

  <input
    type="radio"
    class="btn-check"
    name="btnradio"
    id="btnradio2"
    autocomplete="off"
    on:click={clickedButton2}
    bind:group={$radioCheck2}
  />
  <label class="btn btn-outline-danger" for="btnradio2">
    Right pokemon
    <i class="fas fa-chevron-right" />
  </label>
</div>
