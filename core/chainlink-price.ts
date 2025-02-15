import { formatUnits } from 'ethers/lib/utils';
import { envConfig } from '../config/env';

const Web3 = require("web3")
const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 1500, checkperiod: 1450 });

export async function getEthPrice() {
  if (myCache.get("eth") === undefined) {
    try {
      const web3 = new Web3(new Web3.providers.HttpProvider(envConfig.httpEndpoint));
      const ABI = [{ "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "description", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "getRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
      const ethAddr = "0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419"
      const priceFeed = new web3.eth.Contract(ABI, ethAddr)
      const priceData = await priceFeed.methods.latestRoundData().call()
      const roundOff = await priceFeed.methods.decimals().call();
      myCache.set("eth", Number(formatUnits(priceData.answer, roundOff)));
      return Number(formatUnits(priceData.answer, roundOff));
    } catch (e) {
      console.log(e);
    }
  }
  return myCache.get("eth");
}

export async function getWbtcPrice() {
  if (myCache.get("wbtc") === undefined) {
    try {
      const web3 = new Web3(new Web3.providers.HttpProvider(envConfig.httpEndpoint));
      const ABI = [{ "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "description", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "getRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
      const ethAddr = "0xf4030086522a5beea4988f8ca5b36dbc97bee88c"
      const priceFeed = new web3.eth.Contract(ABI, ethAddr)
      const priceData = await priceFeed.methods.latestRoundData().call()
      const roundOff = await priceFeed.methods.decimals().call();
      myCache.set("wbtc", Number(formatUnits(priceData.answer, roundOff)));
      return Number(formatUnits(priceData.answer, roundOff));
    } catch (e) {
      console.log(e);
    }
  }
  return myCache.get("wbtc");
}

export async function getLinkPrice() {
  if (myCache.get("link") === undefined) {
    try {
      const web3 = new Web3(new Web3.providers.HttpProvider(envConfig.httpEndpoint));
      const ABI = [{ "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "description", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "getRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
      const ethAddr = "0x2c1d072e956affc0d435cb7ac38ef18d24d9127c"
      const priceFeed = new web3.eth.Contract(ABI, ethAddr)
      const priceData = await priceFeed.methods.latestRoundData().call()
      const roundOff = await priceFeed.methods.decimals().call();
      myCache.set("link", Number(formatUnits(priceData.answer, roundOff)));
      return Number(formatUnits(priceData.answer, roundOff));
    } catch (e) {
      console.log(e);
    }
  }
  return myCache.get("link");
}

export async function getDAIPrice() {
  if (myCache.get("dai") === undefined) {
    try {
      const web3 = new Web3(new Web3.providers.HttpProvider(envConfig.httpEndpoint));
      const ABI = [{ "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "description", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "getRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
      const ethAddr = "0xaed0c38402a5d19df6e4c03f4e2dced6e29c1ee9"
      const priceFeed = new web3.eth.Contract(ABI, ethAddr)
      const priceData = await priceFeed.methods.latestRoundData().call()
      const roundOff = await priceFeed.methods.decimals().call();
      myCache.set("dai", Number(formatUnits(priceData.answer, roundOff)));
      return Number(formatUnits(priceData.answer, roundOff));
    } catch (e) {
      console.log(e);
    }
  }
  return myCache.get("dai");
}