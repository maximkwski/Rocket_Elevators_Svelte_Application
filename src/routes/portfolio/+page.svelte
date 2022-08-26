<script>
      import {  web3, connected, selectedAccount, chainId, chainData, defaultEvmStores } from 'svelte-web3'
    import { writable } from 'svelte/store';
    import { onMount } from 'svelte';
    // import {nft} from '../../stores/portfolio';
    import NFTItem from '../../components/NFTItem.svelte';  
    // console.log("my nft collection is" ,$nft);
   
    export const nft = writable([]);
     onMount( async () => {
            
            defaultEvmStores.setProvider()
            const url = `https://express-api.codeboxxtest.xyz/NFT/getWalletTokens/`;
            const wallet_address = `0x1E90cf48F11Dd52802eC7D1AF7082122A6a59312`;
            fetch(`${url}${$selectedAccount}`).then(resp => resp.json())
            .then(data => {
                console.log(data)
                console.log("my account is: ", $selectedAccount)
                const loadedNFT = data.map((data, index) => {
                    return {
                        name: data.name,
                        description: data.description,
                        id: index + 1,
                        image: data.image
                    }
                })
                nft.set(loadedNFT)
            }).catch(error => {
                console.log(error);
            });
           
    
        }
        )
        
    
    // import '../minting/+page.svelte'
    // import { wallet_address } from "../minting/+page.svelte";
    // console.log ('my wallet address is:' ,$wallet_address)








// const fetchMyNFTs = async () => {
//     const url = `https://express-api.codeboxxtest.xyz/NFT/getWalletTokens/`;
//     const wallet_address = `0x1E90cf48F11Dd52802eC7D1AF7082122A6a59312`;
//     const resp = await fetch(`${url}${wallet_address}`);
//     const data = await resp.json();
//     console.log(data)
//     const loadedNFT = data.map((data, index) => {
//         return {
//             name: data.name,
//             description: data.description,
//             id: index + 1,
//             image: data.image
//         }
//     })
//     nft.set(loadedNFT)
// }
// fetchMyNFTs();

</script>

<h1 class="text-4xl text-center my-8 uppercase">My NFT Portfolio</h1>
<div class="flex flex-wrap justify-center items-center" >
{#each $nft as myNFT}
   <NFTItem {myNFT} />
{/each}
</div>
