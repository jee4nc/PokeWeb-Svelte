<script>
  import { isActive, url } from "@roxi/routify";

  const links = [
    ["./", "Home"],
    ["./list", "Pokemon List"],
    ["./search", "Pokemon Search"],
  ];
</script>

<ul>
  {#each links as [path, name]}
    <!-- Svelte magic. If isActive is true, the "active" class is applied. -->
    <li class:active={$isActive(path)}>
      <a href={$url(path)}>
        {name}
      </a>
    </li>
  {/each}
</ul>

<style></style>
