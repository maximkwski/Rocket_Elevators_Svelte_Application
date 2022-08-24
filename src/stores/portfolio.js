import { writable } from "svelte/store";

export const nft = writable([]);

const fetchMyNFTs = async () => {
    const url = `https://express-api.codeboxxtest.xyz/NFT/getWalletTokens/`;
    const wallet_address = `0x1E90cf48F11Dd52802eC7D1AF7082122A6a59312`;
    const resp = await fetch(`${url}${wallet_address}`);
    const data = await resp.json();
    console.log(data)
    const loadedNFT = data.map((data, index) => {
        return {
            name: data.name,
            description: data.description,
            id: index + 1,
            image: `https://ipfs.moralis.io:2053/ipfs/QmP8itDDxptqdeYo5Bdh6Bn3dWch1y1FvQeNzBCNTVJYch/RocketElevatorsNFTImage_${index + 1}.png`
        }
    })
    nft.set(loadedNFT)
}
fetchMyNFTs();