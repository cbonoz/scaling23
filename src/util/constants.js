export const COVALENT_KEY = process.env.REACT_APP_COVALENT_KEY; // covalent api key
export const NFT_PORT_KEY = process.env.REACT_APP_NFT_PORT_KEY; // nft port key

export const APP_NAME = "zklinks";
export const APP_DESC = "Zero-knowledge referral link tracking";
export const APP_ICON_URL = 'https://i.ibb.co/rsBPB9g/link.png';


// https://polybase.xyz/docs/read
export const POLYBASE_NAMESPACE = process.env.REACT_APP_POLYBASE_NAMESPACE || "pk/0xbb44be3b8e07ed240e9144acfa4760f872ea5282b86647e678b505ffc2192b8cb5462e4624f2b1f363b6ad91b23ad7c3b99bf97450354725273cd486c1898606/zklinks"


// Push protocol
export const PUSH_NOTIFICATIONS_ENV = 'staging'
export const PUSH_PK = process.env.REACT_APP_PUSH_PK;
export const PUSH_CHANNEL = '' // push notification channel


// https://ethglobal.com/events/scaling2023/prizes#polygon
// Include trailing slashes
export const CHAIN_OPTIONS = {

  // 137: {
  //   name: "Matic Mainnet",
  //   url: "https://polygonscan.com/",
  //   id: 137,
  // },
  534353:
  {
    // https://guide.scroll.io/user-guide/setup
    name: 'Scroll Alpha Testnet',
    rpcUrl: 'https://alpha-rpc.scroll.io/l2',
    symbol: 'ETH',
    url:"https://blockscout.scroll.io/",
    id: 534353
  },
  // https://gnosisfaucet.com/
  10200: {
    name: 'Gnosis (Chaido)',
    symbol: 'XDAI',
    rpcUrl: 'https://rpc.chiadochain.net',
    url: 'https://blockscout.com/gnosis/chiado/',
    id: 10200
  },
  80001: {
    name: "Mumbai Testnet",
    url: "https://mumbai.polygonscan.com/",
    id: 80001,
  },
};

export const DEFAULT_CHAIN_ID = 534353;
export const DEFAULT_CHAIN = CHAIN_OPTIONS[DEFAULT_CHAIN_ID]

export const EXAMPLE_FORM = {
  title: "My referral marketing campaign",
  redirectUrl: "https://google.com",
  reward: 0
};

export const IPFS_BASE_URL = "https://w3s.link/ipfs"

export const CREATE_STEPS = [
  {
    title: "Fill in fields",
    description: "Enter required data to register the link."
  },
  {
    title: "Create zklink request",
    description: "Requires authorizing a create zklink smart contract request."
  },
  {
    title: "Wait for zklink to be created",
    description: "Your referral url will be live for others to use"
  }
]

console.log("config", COVALENT_KEY, NFT_PORT_KEY, DEFAULT_CHAIN);
