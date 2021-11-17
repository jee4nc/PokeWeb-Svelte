<script lang="ts">
  import BackButton from "$share/BackButton.svelte";
  import SearchBar from "$components/search/SearchBar.svelte";
  import DivTitle from "$share/DivTitle.svelte";
  import { imgTitleList } from "$utils/constants";

  const link: string = "./";
  const titleBack: string = "Back";
</script>

<div class="index">
  <BackButton {link} titleButton={titleBack} />
  <DivTitle img={imgTitleList} title="Search your pokemon" />
  <br />
  <SearchBar />
</div>
