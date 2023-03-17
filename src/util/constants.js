export const COVALENT_KEY = process.env.REACT_APP_COVALENT_KEY; // covalent api key
export const NFT_PORT_KEY = process.env.REACT_APP_NFT_PORT_KEY; // nft port key

export const APP_NAME = "zklinks";
export const APP_DESC = "Zero knowledge-backed zklink requests";


// Push protocol
export const PUSH_NOTIFICATIONS_ENV = 'staging'
export const PUSH_PK = 'your_channel_address_secret_key'; // channel private key
export const PUSH_CHANNEL = '' // push notification channel


// https://ethglobal.com/events/scaling2023/prizes#polygon
// Include trailing slashes
export const CHAIN_OPTIONS = {
  80001: {
    name: "Mumbai Testnet",
    url: "https://mumbai.polygonscan.com/",
    id: 80001,
  },
  137: {
    name: "Matic Mainnet",
    url: "https://polygonscan.com/",
    id: 137,
  },
  534353:
  {
    // https://guide.scroll.io/user-guide/setup
    name: 'Scroll Alpha Testnet',
    rpcUrl: 'https://alpha-rpc.scroll.io/l2',
    symbol: 'ETH',
    url:"https://blockscout.scroll.io/",
    id: 534353
  }
};

export const DEFAULT_CHAIN_ID = 80001
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
