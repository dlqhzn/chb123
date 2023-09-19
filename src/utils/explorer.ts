import { PublicKey, Transaction } from '@solana/web3.js'
import base58 from 'bs58'
const solana = require('@solana/web3.js');
const connection = new solana.Connection("https://blissful-blue-ensemble.solana-mainnet.discover.quiknode.pro/4b46c5f0d4f758922251879ca8728f9220816185/");
connection.getVersion().then(response => console.log(response));
import 'dotenv/config'
const endpoint = process.env.QUICKNODE_ENDPOINT;

export function getExplorerUrl(
    endpoint: string,
    viewTypeOrItemAddress: 'inspector' | PublicKey | string,
    itemType = 'address' // | 'tx' | 'block'
  ) {
    const getClusterUrlParam = () => {
      let cluster = ''
      if (endpoint === 'localnet') {
        cluster = `custom&customUrl=${encodeURIComponent(
          'http://127.0.0.1:8899'
        )}`
      } else if (endpoint === 'https://blissful-blue-ensemble.solana-mainnet.discover.quiknode.pro/4b46c5f0d4f758922251879ca8728f9220816185/') {
        cluster = ''
      }
      return cluster ? `?cluster=${cluster}` : ''
    }
  
    return `https://explorer.solana.com/${itemType}/${viewTypeOrItemAddress}${getClusterUrlParam()}`
  }