<script lang="ts">
  export let img: string;
  export let title: string;
</script>

<div class="DivTitle">
  <div style="text-align: center;">
    <h1>
      <img src={img} alt="" style="max-width: 70px;" />
      {title}
      <img src={img} alt="" style="max-width: 70px;" />
    </h1>
  </div>
</div>
