<script lang="ts">
  import BackButton from "$share/BackButton.svelte";
  import SearchBar from "$components/search/SearchBar.svelte";
  import DivTitle from "$share/DivTitle.svelte";
  import { baseLink } from "$constants/errors";
  import { imgTitleList } from "$constants/links";

  const titleBack: string = "Back";
</script>

<div class="index">
  <BackButton link={baseLink} titleButton={titleBack} />
  <DivTitle img={imgTitleList} title="Search your pokemon" />
  <br />
  <SearchBar />
</div>
