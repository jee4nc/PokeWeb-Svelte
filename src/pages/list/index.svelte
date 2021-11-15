<script lang="ts">
  import NavbarComponent from "$cComponent/navbarComponent.svelte";
  import BackButtonComponent from "$cComponent/backButtonComponent.svelte";
  import SearchBarComponent from "$components/search/searchBarComponent.svelte";

  const link = "./";
  const titleB = "Back";
  const placeholderButton = "Add pokemon name";
</script>

<NavbarComponent />
<BackButtonComponent {link} titleButton={titleB} />
<div style="text-align: center;">
  <h1>Search your favorite pokemon here 👇</h1>
</div>
<br />

<SearchBarComponent labelInput={placeholderButton} />
