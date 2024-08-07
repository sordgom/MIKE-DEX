const { Web3 } = require('web3');

const publicNodeUrl = 'https://eth-mainnet.g.alchemy.com/v2/_yw2big0nj4k8dZCkdZHS_ub4uSdA-eN'; //placeholder
const web3 = new Web3(new Web3.providers.HttpProvider(publicNodeUrl));

const {CONTRACT_ABI, CONTRACT_ADDRESS} = require('./config/smart-contract');
const { start } = require('repl');
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

async function getVersion(req, res) {
  try {
    const data = await contract.methods.version().call();
    res.send(`Chainlink AAVE/ETH Price feed's version is: ${data}`);
  } catch(err) {
    res.status(500).send(err.toString())
  }
};

async function getDescription(req, res) {
  try {
    const data = await contract.methods.description().call(); 
    res.send(`This contract's description is: ${data}`);
  } catch(err) {
    res.status(500).send(err.toString())
  }
};


module.exports = {
  getVersion,
  getDescription
};