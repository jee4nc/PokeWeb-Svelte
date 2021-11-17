<script lang="ts">
  export let title: string = "";
  export let img: string = "";
  export let bigImg: string = "";
</script>

<div class="TitleHome">
  <h1>
    {title} <img src={img} width="40px" alt="..." />
  </h1>
  <br />
  <img src={bigImg} alt="..." />
</div>
