<script>
    export let myNFT;
</script>

<a href={`/myNFTlist/${myNFT.id}`}>
    <img src={myNFT.image} >
    <h2>{myNFT.id}. {myNFT.name}</h2>
</a>
<!-- <p>{myNFTlist.name}</p> -->
