export const TARGET = 'cardano-wallet';
export const SENDER = { extension: 'extension', webpage: 'webpage' };
export const METHOD = {
  isWhitelisted: 'isWhitelisted',
  enable: 'enable',
  isEnabled: 'isEnabled',
  currentWebpage: 'currentWebpage',
  getBalance: 'getBalance',
  getDelegation: 'getDelegation',
  getUtxos: 'getUtxos',
  getAddress: 'getAddress',
  signData: 'signData',
  signTx: 'signTx',
  submitTx: 'submitTx',
  //internal
  requestData: 'requestData',
  returnData: 'returnData',
};

export const STORAGE = {
  whitelisted: 'whitelisted',
  encryptedKey: 'encryptedKey',
  accounts: 'accounts',
  currentAccount: 'currentAccount',
  network: 'network',
};

export const NETWORK = {
  mainnet: 'mainnet',
  testnet: 'testnet',
};

export const POPUP = {
  main: 'mainPopup',
  internal: 'internalPopup',
};

export const POPUP_WINDOW = {
  top: 50,
  left: 100,
  width: 400,
  height: 600,
};

export const ERROR = {
  accessDenied: 'Access denied',
  wrongPassword: 'Wrong password',
  signatureDenied: 'Signature denied',
  storeNotEmpty: 'Storage key is already set',
  noKeyHash: 'No key hash could be generated',
  txFailed: 'Tx failed',
  onlyOneAccount: 'Only one account exist in the wallet',
};

export const ROUTE = {
  wallet: '/wallet',
  welcome: '/welcome',
  createWallet: '/createWallet',
  signData: '/signData',
  signTx: '/signTx',
  enable: '/enable',
};

export const EVENT = {
  txSubmit: 'txSubmit',
  txConfirmation: 'txConfirmation',
  accountChange: 'accountChange',
};

// Errors dApp Connector
export const APIError = {
  InvalidRequest: {
    code: -1,
    info: 'Inputs do not conform to this spec or are otherwise invalid.',
  },
  InternalError: {
    code: -2,
    info: 'An error occurred during execution of this API call.',
  },
  Refused: {
    code: -3,
    info: 'The request was refused due to lack of access - e.g. wallet disconnects.',
  },
};

export const DataSignError = {
  ProofGeneration: {
    code: 1,
    info: 'Wallet could not sign the data (e.g. does not have the secret key associated with the address).',
  },
  AddressNotPK: {
    code: 2,
    info: 'Address was not a P2PK address or Reward address and thus had no SK associated with it.',
  },
  UserDeclined: { code: 3, info: 'User declined to sign the data.' },
  InvalidFormat: {
    code: 4,
    info: 'If a wallet enforces data format requirements, this error signifies that the data did not conform to valid formats.',
  },
};

export const TxSendError = {
  Refused: {
    code: 1,
    info: 'Wallet refuses to send the tx (could be rate limiting).',
  },
  Failure: { code: 2, info: 'Wallet could not send the tx.' },
};

export const TxSignError = {
  ProofGeneration: {
    code: 1,
    info: 'User has accepted the transaction sign, but the wallet was unable to sign the transaction (e.g. not having some of the private keys).',
  },
  UserDeclined: { code: 2, info: 'User declined to sign the transaction.' },
};
