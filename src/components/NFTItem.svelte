<script>
    export let myNFT;
</script>

<a class="p-6 m-2 bg-gray-100 text-gray-800 text-center rounded-lg shadow-sm hover:shadow-md" href={`/myNFTlist/${myNFT.id}`}>
    <img src={myNFT.image} class="w-32 m-auto">
    <h2>{myNFT.id}. {myNFT.name}</h2>
</a>
<!-- <p>{myNFTlist.name}</p> -->
