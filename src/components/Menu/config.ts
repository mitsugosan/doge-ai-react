import { MenuEntry } from 'glassswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  // {
  //   label: 'Trade (New with APE)',
  //   icon: 'TradeIcon',
  //   items: [
  //     {
  //       label: 'Exchange',
  //       href:
  //         'https://swape.glassswap.money/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xc0699dcAf5AE66D36881cae93120c851dB6986c1',
  //       target: '_blank',
  //     },
  //     {
  //       label: 'Liquidity',
  //       href:
  //         'https://swape.glassswap.money/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0xc0699dcAf5AE66D36881cae93120c851dB6986c1',
  //       target: '_blank',
  //     },
  //   ],
  // },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href:
          'https://swap.glassswap.money/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xc0699dcAf5AE66D36881cae93120c851dB6986c1',
      },
      {
        label: 'Liquidity',
        href:
          'https://swap.glassswap.money/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0xc0699dcAf5AE66D36881cae93120c851dB6986c1',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Launchpad',
    icon: 'BushIcon',
    href: '/bush',
  },
  // {
  //   label: 'Techrate Audit',
  //   icon: 'ShieldIcon',
  //   href: 'https://glassswap.money/files/audit_techrate.pdf',
  //   target: '_blank',
  // },
  // {
  //   label: 'Certik Audit (In-Progress)',
  //   icon: 'ShieldIcon',
  //   href: 'https://certik.org/projects/glassswap',
  //   target: '_blank',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      // {
      //   label: 'Token',
      //   href: 'https://doc.glassswap.money/tokennomics/wine-token',
      //   target: '_blank',
      // },
      // {
      //   label: 'Contracts',
      //   href: 'https://doc.glassswap.money/security/contracts',
      //   target: '_blank',
      // },
      // {
      //   label: 'Transparency',
      //   href: 'https://doc.glassswap.money/transparency/transparency',
      //   target: '_blank',
      // },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xc0699dcAf5AE66D36881cae93120c851dB6986c1',
        target: '_blank',
      },
      {
        label: 'Dapp.com',
        href: 'https://www.dapp.com/app/glassswap',
        target: '_blank',
      },
      {
        label: 'Dappradar.com',
        href: 'https://dappradar.com/binance-smart-chain/defi/glassswap',
        target: '_blank',
      },
      {
        label: 'Bsc.news',
        href: 'https://www.bsc.news/bsc-projects',
        target: '_blank',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/tapswaptoken',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/tapswaptoken/',
      // },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/tapswapmoney/Glassswap/',
        target: '_blank',
      },
      // {
      //   label: 'Docs',
      //   href: 'https://doc.glassswap.money/',
      //   target: '_blank',
      // },
      {
        label: 'Blog',
        href: 'https://tapswapmoneydex.medium.com/',
        target: '_blank',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/glassswap',
        target: '_blank',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/tapswapchat',
        target: '_blank',
      },
    ],
  },
]

export default config
