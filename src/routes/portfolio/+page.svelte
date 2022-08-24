<script>
    import {nft} from '../../stores/portfolio';
    import NFTItem from '../../components/NFTItem.svelte';
    console.log("my nft collection is" ,$nft);
</script>

<h1 class="text-4xl text-center my-8 uppercase">My Portfolio</h1>

{#each $nft as myNFT}
   <NFTItem {myNFT} />
{/each}
