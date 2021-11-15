<script lang="ts">
  import NavbarComponent from "$cComponent/navbarComponent.svelte";
  import BackButtonComponent from "$cComponent/backButtonComponent.svelte";
  import SearchBarComponent from "$components/search/searchBarComponent.svelte";
  import DivTitle from "$cComponent/DivTitle.svelte";
  import { imgTitleList } from "$utils/constantes";

  const link = "./";
  const titleB = "Back";
  const placeholderButton = "Add pokemon name";
</script>

<div class="index">
  <NavbarComponent />
  <BackButtonComponent {link} titleButton={titleB} />
  <DivTitle img={imgTitleList} title="Search your pokemon" />
  <br />
  <SearchBarComponent labelInput={placeholderButton} />
</div>
