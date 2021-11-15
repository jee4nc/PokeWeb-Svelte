<script>
  import { url } from "@roxi/routify";
  import { imgLogo } from "$utils/constants";

  const links = [
    ["./list", "Pokemon List"],
    ["./search", "Pokemon Search"],
  ];
  const baseRoute = "./";
</script>

<nav class="navbar navbar-expand-lg navbar-dark navbarColor">
  <div class="container-fluid">
    <a class="navbar-brand" href={baseRoute}>
      <img src={imgLogo} alt="" width="30" height="24" />
      PokeWeb
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        {#each links as [path, name]}
          <!-- Svelte magic. If isActive is true, the "active" class is applied. -->
          <li class="nav-item navColor">
            <a class="nav-link " href={$url("/" + path)}>
              {name}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

<style>
  .navbarColor {
    background-color: rgb(221, 94, 86);
  }
  .navColor a {
    color: white;
    font-weight: 500;
  }
  .navColor:hover a {
    text-decoration: underline;
  }
</style>
