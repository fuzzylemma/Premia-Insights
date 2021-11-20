import { eventForTelegram, eventPurchase } from "../models/models";
import { fixedToNumber, parseTokenId, TokenType } from '@premia/utils'
import { bnToNumber, bnToNumberBTC, endpoint } from "../utils/utils";
import { envConfig } from "../config/env";
import {BigNumber} from "ethers";


async function sendPurchaseNotification(data: eventPurchase, http: any, pair: string) {
  try {
    let constructEvent: eventForTelegram = {
      size: data.contractSize,
      pair
    }
    const {tokenType, maturity, strike64x64} = parseTokenId(BigNumber.from(data.longTokenId).toHexString());
    constructEvent.type = tokenType === TokenType.LongCall ? `long Call` : tokenType === TokenType.LongPut ? `long Put` : `Not Supported`
    constructEvent.maturity = new Date(maturity.toNumber() * 1000).toDateString();
    constructEvent.strikePrice = fixedToNumber(strike64x64);
    await http.get(
      `${endpoint}New Purchase ${constructEvent.pair} ${constructEvent.type} size: ${constructEvent.size} strike: ${constructEvent.strikePrice} maturity: ${constructEvent.maturity}`
    )
    await http.post(
      envConfig.discordWebHookUrl,
      {
        headers:{
          'Content-type': 'application/json'
        },
        username: "Premia-Insights",
        avatar_url: "",
        content: `New Purchase ${constructEvent.pair} ${constructEvent.type} size: ${constructEvent.size} strike: ${constructEvent.strikePrice} maturity: ${constructEvent.maturity}`
      }
    )
  } catch (e) {
    console.log(e);
  }
}

export function startPurchase(web3: any, http: any, wethDai: any, linkDai: any, wbtcDai: any) {
  [
    {pool: wethDai, pair: 'WETH/DAI'},
    {pool: linkDai, pair: 'LINK/DAI'},
    {pool: wbtcDai, pair: 'WBTC/DAI'}
  ].forEach(el => {
    el.pool.events.Purchase({
      filter: {
        value: [],
      },
      fromBlock: envConfig.startBlocKHeight
    }).on('data', event => {
      let eventData: eventPurchase = {
        account: event.returnValues[`0`],
        longTokenId: event.returnValues[`1`],
        contractSize: el.pair === 'WBTC/DAI' ? bnToNumberBTC(event.returnValues[`2`]) : bnToNumber(event.returnValues[`2`]),
        baseCost: event.returnValues[`3`],
        feeCost: event.returnValues[`4`],
        newPrice64x64: event.returnValues[`5`]
      }
      sendPurchaseNotification(eventData, http, el.pair);
    })
      .on('changed', changed => console.log(changed))
      .on('error', err => console.log(err))
      .on('connected', str => console.log(str))
  })
}
