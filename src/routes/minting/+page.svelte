<script>
    import {  web3, connected, selectedAccount, chainId, chainData, defaultEvmStores } from 'svelte-web3'

   const openMetamask = async () =>  {
    let account;
    await ethereum.request({ method: 'eth_requestAccounts'}).then(accounts => {
        account = accounts[0];
        console.log(account);
        
        ethereum.request({ method: 'eth_getBalance', params: [account, 'latest']}).then( result => {
            console.log(result);
            let wei = parseInt(result,16);
            let balance = wei / (10**18);
            console.log('my ballance is:', balance + " eth")
        })
    })
    
    
    };
    
    

</script>

<h1 class="text-4xl text-center my-8 uppercase">NFT Minting Page</h1>

<div class="flex justify-center">
<button on:click={openMetamask} id="connect-button" class="p-2 text-lg bg-blue-300 text-center rounded-lg shadow-sm hover:shadow-md">Connect Metamask</button>
</div>


<!-- 
{#if !$connected}

<p>My application is not yet connected</p>

{:else}

<p>Connected to chain with id {$chainId}</p>

{/if} -->

