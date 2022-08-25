<script>
    import {  web3, connected, selectedAccount, chainId, chainData, defaultEvmStores } from 'svelte-web3'
    import { writable } from "svelte/store";

    export const wallet_address = writable('');
    export const freeNFTresp = writable('');

    const openMetamask = async () =>  {
       let account;
        await ethereum.request({ method: 'eth_requestAccounts'}).then(accounts => {
            console.log(accounts)
           account = accounts[0];
            console.log('my account is:',account);
            
            
            ethereum.request({ method: 'eth_getBalance', params: [account, 'latest']}).then( result => {
                console.log(result);
                let wei = parseInt(result,16);
                let balance = wei / (10**18);
                console.log('my ballance is:', balance + " eth")
            })
        })

        wallet_address.set(account)
        console.log("my wallet addresssss :",($wallet_address))
    };

    const freeNFTcheck = async () => {
        const url = `https://express-api.codeboxxtest.xyz/NFT/gift/`;
        // const wallet_address = `0x1E90cf48F11Dd52802eC7D1AF7082122A6a59312`;
        const resp = await fetch(`${url}${$wallet_address}`);
        const data = await resp.json();
        console.log("Free NFT? ",data)

        return {
            data
        }
    }

    
    

</script>

<h1 class="text-4xl text-center my-8 uppercase">NFT Minting Page</h1>

<div class="flex flex-col justify-center">
<button on:click={openMetamask} id="connect-button" class="p-2 my-2 text-lg bg-blue-300 text-center rounded-lg shadow-sm hover:shadow-md">Connect Metamask</button>
<button  on:click={freeNFTcheck} id="freenft-button" class="p-2 my-2 text-lg bg-red-400 text-center rounded-lg shadow-sm hover:shadow-md">Get Free NFT</button>
</div>



{#if {freeNFTcheck} === true}

<p>You are eligible for a free NFT</p>

{:else}

<p>You are not eligible for free NFT, please buy an NFT with ROCKET tocken.</p>

{/if}

