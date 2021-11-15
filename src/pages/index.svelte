<script>
  // Import component
  import NavbarComponent from "$cComponent/navbarComponent.svelte";
</script>

<div>
  <NavbarComponent />

  <div class="container">
    <h1>
      PokeWeb powered by Svelte <img
        src="https://cdn.svgporn.com/logos/svelte-icon.svg"
        width="40px"
        alt="..."
      />
    </h1>
    <br />
    <img
      src="https://i.pinimg.com/originals/51/a6/bc/51a6bc8a9107cb0319807b4c0b0812ae.gif"
      alt="..."
    />
  </div>
</div>

<style>
  .container {
    margin-top: 7em;
    text-align: center;
  }
</style>
