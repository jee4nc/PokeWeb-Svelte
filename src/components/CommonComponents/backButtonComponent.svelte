<script lang="ts">
  export let link;
  export let titleButton = "back"
</script>

<div>
    <a href={link}>
      <button type="button" class="btn btn-primary">{titleButton}</button>
    </a>
  </div>
