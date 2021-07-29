// https://swape.glassswap.money/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xc0699dcAf5AE66D36881cae93120c851dB6986c1
const getSwapUrlPathParts = ({ tokenAddresses }) => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  return `#/swap?outputCurrency=${tokenAddresses[chainId]}`
}

export default getSwapUrlPathParts
