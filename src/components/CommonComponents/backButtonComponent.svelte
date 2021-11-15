<script lang="ts">
  export let link;
  export let titleButton = "back";
</script>

<div class="buttonBack">
  <a href={link}>
    <button type="button" class="btn btn-danger">
      <i class="fas fa-backward" />
      {titleButton}</button
    >
  </a>
</div>

<style>
  .buttonBack {
    margin-left: 2em;
    margin-top: 1em;
  }
</style>
