<script lang="ts">
  import BackButtonComponent from "$cComponent/backButtonComponent.svelte";
  import SearchBarComponent from "$components/search/searchBarComponent.svelte";
  import DivTitle from "$cComponent/DivTitle.svelte";
  import { imgTitleList } from "$utils/constants";

  const link = "./";
  const titleB = "Back";
</script>

<div class="index">
  <BackButtonComponent {link} titleButton={titleB} />
  <DivTitle img={imgTitleList} title="Search your pokemon" />
  <br />
  <SearchBarComponent  />
</div>
