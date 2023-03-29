const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider("https://rpc-mumbai.maticvigil.com/"));
const contractAbi = JSON.parse(process.env.CONTRACTABI);
const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(contractAbi, contractAddress);

module.exports = contract;


