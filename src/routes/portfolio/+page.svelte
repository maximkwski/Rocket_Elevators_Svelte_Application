<script>
    import {nft} from '../../stores/portfolio';
    console.log($nft);
</script>

<h1 class="text-4xl text-center my-8 uppercase">My Portfolio</h1>

{#each $nft as myNFTlist}
    <p>{myNFTlist.name}</p>
{/each}


