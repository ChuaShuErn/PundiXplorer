const bridgeImplementationContractABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_eventNonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_channelIBC",
        type: "bytes32",
      },
    ],
    name: "AddBridgeTokenEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_eventNonce",
        type: "uint256",
      },
    ],
    name: "FxOriginatedTokenEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_newOracleSetNonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_eventNonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "_oracles",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_powers",
        type: "uint256[]",
      },
    ],
    name: "OracleSetUpdatedEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "_destination",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_targetIBC",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_eventNonce",
        type: "uint256",
      },
    ],
    name: "SendToFxEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_batchNonce",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_eventNonce",
        type: "uint256",
      },
    ],
    name: "TransactionBatchExecutedEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "TransferOwnerEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
    ],
    name: "activeBridgeToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_channelIBC",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "_isOriginated",
        type: "bool",
      },
    ],
    name: "addBridgeToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bridgeTokens",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
    ],
    name: "checkAssetStatus",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_currentOracles",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_currentPowers",
        type: "uint256[]",
      },
      {
        internalType: "uint8[]",
        name: "_v",
        type: "uint8[]",
      },
      {
        internalType: "bytes32[]",
        name: "_r",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32[]",
        name: "_s",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "_theHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_powerThreshold",
        type: "uint256",
      },
    ],
    name: "checkOracleSignatures",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getBridgeTokenList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8",
          },
        ],
        internalType: "struct FxBridgeLogicETH.BridgeToken[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_fxBridgeId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_powerThreshold",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_oracles",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_powers",
        type: "uint256[]",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_erc20Address",
        type: "address",
      },
    ],
    name: "lastBatchNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_oracles",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_powers",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_oracleSetNonce",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_fxBridgeId",
        type: "bytes32",
      },
    ],
    name: "makeCheckpoint",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
    ],
    name: "pauseBridgeToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_destination",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_targetIBC",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sendToFx",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
    ],
    name: "setFxOriginatedToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "state_fxBridgeId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "state_fxOriginatedToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "state_lastBatchNonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "state_lastEventNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "state_lastOracleSetCheckpoint",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "state_lastOracleSetNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "state_powerThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_currentOracles",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_currentPowers",
        type: "uint256[]",
      },
      {
        internalType: "uint8[]",
        name: "_v",
        type: "uint8[]",
      },
      {
        internalType: "bytes32[]",
        name: "_r",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32[]",
        name: "_s",
        type: "bytes32[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "_destinations",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_fees",
        type: "uint256[]",
      },
      {
        internalType: "uint256[2]",
        name: "_nonceArray",
        type: "uint256[2]",
      },
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_batchTimeout",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_feeReceive",
        type: "address",
      },
    ],
    name: "submitBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenStatus",
    outputs: [
      {
        internalType: "bool",
        name: "isOriginated",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isExist",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_newOracles",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_newPowers",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_newOracleSetNonce",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_currentOracles",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_currentPowers",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_currentOracleSetNonce",
        type: "uint256",
      },
      {
        internalType: "uint8[]",
        name: "_v",
        type: "uint8[]",
      },
      {
        internalType: "bytes32[]",
        name: "_r",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32[]",
        name: "_s",
        type: "bytes32[]",
      },
    ],
    name: "updateOracleSet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export default bridgeImplementationContractABI;
