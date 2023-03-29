const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider("https://rpc-mumbai.maticvigil.com/"));
const contractAbi = JSON.parse(process.env.NFT_CONTRACTABI);
const contractAddress = process.env.NFT_CONTRACT_ADDRESS;
const nftContract = new web3.eth.Contract(contractAbi, contractAddress);

module.exports = nftContract;


