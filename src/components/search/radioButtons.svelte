<script lang="ts">
  export let radioButton = 1;
  import { radioValues } from "$utils/constants";
  console.log(radioValues);
</script>

<div
  class="btn-group"
  role="group"
  aria-label="Basic radio toggle button group"
>
  {#each radioValues as button, i}
    <input
      type="radio"
      id={"btnradio" + i}
      class="btn-check"
      name="radioButton"
      value={i}
      bind:group={radioButton}
    />
    <label class="btn btn-outline-danger" for={"btnradio" + i}>
      <i class="fas {button.class}" />
      {button.title}
    </label>
  {/each}
</div>
