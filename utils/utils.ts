import { BigNumber } from 'ethers';
import { formatUnits } from 'ethers/lib/utils';
import { envConfig } from '../config/env';
import axios from 'axios';
var rateLimit = require('axios-rate-limit');
export const http = rateLimit(axios.create(), { maxRequests: 1, perMilliseconds: 5000 });

export const arbiColor = `\`\`\`ini
[ARBITRUM-MAINNET]
\`\`\``;

export const ethColor = `\`\`\`
[ETH-MAINNET]
\`\`\``;

export function bnToNumber(bn: BigNumber) {
  return Number(formatUnits(bn, 18));
}
export function bnToNumberBTC(bn: BigNumber) {
  return Number(formatUnits(bn, 8));
}
export function roundTo5(number: number) {
  return (Math.round(number*100000)/100000);
}
export const etherScanTx = 'https://etherscan.io/tx/';
export const arbiScanTx = 'https://arbiscan.io/tx/';
export const ethMainnet: string = 'ETH-MAINNET';
export const arbiMainnet: string = 'ARBITRUM-MAINNET'
export const endpoint = `https://api.telegram.org/bot${envConfig.telegramBotApiKey}/sendMessage?chat_id=${envConfig.telegramChannelName}&text=`
