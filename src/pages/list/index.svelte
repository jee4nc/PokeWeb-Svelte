<script lang="ts">
  import NavbarComponent from "$cComponent/navbarComponent.svelte";
  import BackButtonComponent from "$cComponent/backButtonComponent.svelte";
  import SearchBarComponent from "$components/search/searchBarComponent.svelte";

  const link = "./";
  const titleB = "Back";
  const placeholderButton = "Add pokemon name"
</script>

<NavbarComponent />
<BackButtonComponent {link} titleButton={titleB} />
<h1>Pokemon List Component Here!</h1>
<br />

<SearchBarComponent labelInput={placeholderButton}></SearchBarComponent>

