<script lang="ts">
  export let radioButton = 1;
  import { radioValues } from "$utils/constants";
</script>

<div
  class="btn-group"
  role="group"
  aria-label="Basic radio toggle button group"
>
  <input
    type="radio"
    class="btn-check"
    id="btnradio1"
    name="radioButton"
    value={radioValues.left}
    bind:group={radioButton}
  />
  <label class="btn btn-outline-danger" for="btnradio1">
    <i class="fas fa-chevron-left" />
    Left pokemon</label
  >

  <input
    type="radio"
    class="btn-check"
    id="btnradio2"
    name="radioButton"
    value={radioValues.rigth}
    bind:group={radioButton}
  />
  <label class="btn btn-outline-danger" for="btnradio2">
    Right pokemon
    <i class="fas fa-chevron-right" />
  </label>
</div>
