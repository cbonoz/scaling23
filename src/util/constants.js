export const COVALENT_KEY = process.env.REACT_APP_COVALENT_KEY; // covalent api key
export const NFT_PORT_KEY = process.env.REACT_APP_NFT_PORT_KEY; // nft port key

export const APP_NAME = "zklinks";
export const APP_DESC = "Zero knowledge-backed zklink requests";


// Push protocol
export const PUSH_NOTIFICATIONS_ENV = 'staging'
export const PUSH_PK = 'your_channel_address_secret_key'; // channel private key
export const PUSH_CHANNEL = '' // push notification channel


// https://docs.fantom.foundation/wallet/set-up-metamask
// Include trailing slashes
export const CHAIN_OPTIONS = {
  // Polygon testnet

  "250": {
    name: "Fantom Opera",
    symbol: "FTM",
    rpc: "https://rpc.ankr.com/fantom/",
    url: "https://ftmscan.com/",
    id: 250,
  },
  "4002": {
    name: "Fantom Testnet",
    symbol: "FTM",
    rpc: "https://rpc.testnet.fantom.network/",
    url: "https://testnet.ftmscan.com/",
    id: 4002,
  },
};


// https://ethglobal.com/events/scaling2023/prizes#polygon
// export const CHAIN_IDS = Object.keys(CHAIN_OPTIONS)

// 1: { name: "ethereum", url: "https://etherscan.io/tx/", id: 1 },
  // 42: { name: "kovan", url: "https://kovan.etherscan.io/tx/", id: 42 },
// 4: { name: "rinkeby", url: "https://rinkeby.etherscan.io/tx/", id: 4 },

export const DEFAULT_CHAIN_ID = 4002
export const DEFAULT_CHAIN = CHAIN_OPTIONS[DEFAULT_CHAIN_ID]

export const EXAMPLE_FORM = {
  title: "My referral marketing campaign",
  redirectUrl: 'google.com'
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
