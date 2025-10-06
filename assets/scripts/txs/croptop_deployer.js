const croptopDeployerContract = (chainId) => {
  switch (chainId) {
    case 1: // Ethereum Mainnet
      return "0x769b062fdbb53c6e0172a2b53bb5afd67ab44496";
    case 8453: // Base
      return "0x769b062fdbb53c6e0172a2b53bb5afd67ab44496";
    case 10: // Optimism
      return "0x769b062fdbb53c6e0172a2b53bb5afd67ab44496";
    case 42161: // Arbitrum
      return "0x769b062fdbb53c6e0172a2b53bb5afd67ab44496";
    case 11155111:
      return "0x769b062fdbb53c6e0172a2b53bb5afd67ab44496";
    case 11155420:
      return "0x769b062fdbb53c6e0172a2b53bb5afd67ab44496";
    case 84532:
      return "0x769b062fdbb53c6e0172a2b53bb5afd67ab44496";
    case 421614:
      return "0x769b062fdbb53c6e0172a2b53bb5afd67ab44496";
  }
}

const revnetDeployerContract = (chainId) => {
  switch (chainId) {
    case 1: // Ethereum Mainnet
      return "0x2ca27bde7e7d33e353b44c27acfcf6c78dde251d";
    case 8453: // Base
      return "0x2ca27bde7e7d33e353b44c27acfcf6c78dde251d";
    case 10: // Optimism
      return "0x2ca27bde7e7d33e353b44c27acfcf6c78dde251d";
    case 42161: // Arbitrum
      return "0x2ca27bde7e7d33e353b44c27acfcf6c78dde251d";
    case 11155111:
      return "0x2ca27bde7e7d33e353b44c27acfcf6c78dde251d";
    case 11155420:
      return "0x2ca27bde7e7d33e353b44c27acfcf6c78dde251d";
    case 84532:
      return "0x2ca27bde7e7d33e353b44c27acfcf6c78dde251d";
    case 421614:
      return "0x2ca27bde7e7d33e353b44c27acfcf6c78dde251d";
  }
}

const terminalContract = (chainId) => {
  switch (chainId) {
    case 1: // Ethereum Mainnet
      return "0x2db6d704058e552defe415753465df8df0361846";
    case 8453: // Base
      return "0x2db6d704058e552defe415753465df8df0361846";
    case 10: // Optimism
      return "0x2db6d704058e552defe415753465df8df0361846";
    case 42161: // Arbitrum
      return "0x2db6d704058e552defe415753465df8df0361846";
    case 11155111:
      return "0x2db6d704058e552defe415753465df8df0361846";
    case 11155420:
      return "0x2db6d704058e552defe415753465df8df0361846";
    case 84532:
      return "0x2db6d704058e552defe415753465df8df0361846";
    case 421614:
      return "0x2db6d704058e552defe415753465df8df0361846";
  }
}

const loansContract = (chainId) => {
  switch (chainId) {
    case 1: // Ethereum Mainnet
      return "0x1880d832aa283d05b8eab68877717e25fbd550bb";
    case 8453: // Base
      return "0x1880d832aa283d05b8eab68877717e25fbd550bb";
    case 10: // Optimism
      return "0x1880d832aa283d05b8eab68877717e25fbd550bb";
    case 42161: // Arbitrum
      return "0x1880d832aa283d05b8eab68877717e25fbd550bb";
    case 11155111:
      return "0x1880d832aa283d05b8eab68877717e25fbd550bb";
    case 11155420:
      return "0x1880d832aa283d05b8eab68877717e25fbd550bb";
    case 84532:
      return "0x1880d832aa283d05b8eab68877717e25fbd550bb";
    case 421614:
      return "0x1880d832aa283d05b8eab68877717e25fbd550bb";
  }
}

const pricesContract = (chainId) => {
  switch (chainId) {
    case 1: // Ethereum Mainnet
      return "0x9b90e507cf6b7eb681a506b111f6f50245e614c4";
    case 8453: // Base
      return "0x9b90e507cf6b7eb681a506b111f6f50245e614c4";
    case 10: // Optimism
      return "0x9b90e507cf6b7eb681a506b111f6f50245e614c4";
    case 42161: // Arbitrum
      return "0x9b90e507cf6b7eb681a506b111f6f50245e614c4";
    case 11155111:
      return "0x9b90e507cf6b7eb681a506b111f6f50245e614c4";
    case 11155420:
      return "0x9b90e507cf6b7eb681a506b111f6f50245e614c4";
    case 84532:
      return "0x9b90e507cf6b7eb681a506b111f6f50245e614c4";
    case 421614:
      return "0x9b90e507cf6b7eb681a506b111f6f50245e614c4";
  }
}

const controllerContract = (chainId) => {
  switch (chainId) {
    case 1: // Ethereum Mainnet
      return "0x27da30646502e2f642be5281322ae8c394f7668a";
    case 8453: // Base
      return "0x27da30646502e2f642be5281322ae8c394f7668a";
    case 10: // Optimism
      return "0x27da30646502e2f642be5281322ae8c394f7668a";
    case 42161: // Arbitrum
      return "0x27da30646502e2f642be5281322ae8c394f7668a";
    case 11155111:
      return "0x27da30646502e2f642be5281322ae8c394f7668a";
    case 11155420:
      return "0x27da30646502e2f642be5281322ae8c394f7668a";
    case 84532:
      return "0x27da30646502e2f642be5281322ae8c394f7668a";
    case 421614:
      return "0x27da30646502e2f642be5281322ae8c394f7668a";
  }
}

const croptopDeployerContractABI = [
	{
		"inputs": [
			{
				"internalType": "contract IJBPermissions",
				"name": "permissions",
				"type": "address"
			},
			{
				"internalType": "contract IJBProjects",
				"name": "projects",
				"type": "address"
			},
			{
				"internalType": "contract IJB721TiersHookDeployer",
				"name": "deployer",
				"type": "address"
			},
			{
				"internalType": "contract ICTPublisher4_1",
				"name": "publisher",
				"type": "address"
			},
			{
				"internalType": "contract IJBSuckerRegistry",
				"name": "suckerRegistry",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "trusted_forwarder",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "DEPLOYER",
		"outputs": [
			{
				"internalType": "contract IJB721TiersHookDeployer",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PERMISSIONS",
		"outputs": [
			{
				"internalType": "contract IJBPermissions",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PROJECTS",
		"outputs": [
			{
				"internalType": "contract IJBProjects",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PUBLISHER",
		"outputs": [
			{
				"internalType": "contract ICTPublisher4_1",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "SUCKER_REGISTRY",
		"outputs": [
			{
				"internalType": "contract IJBSuckerRegistry",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "terminal",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "holder",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "projectId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rulesetId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "cashOutCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalSupply",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "token",
								"type": "address"
							},
							{
								"internalType": "uint8",
								"name": "decimals",
								"type": "uint8"
							},
							{
								"internalType": "uint32",
								"name": "currency",
								"type": "uint32"
							},
							{
								"internalType": "uint256",
								"name": "value",
								"type": "uint256"
							}
						],
						"internalType": "struct JBTokenAmount",
						"name": "surplus",
						"type": "tuple"
					},
					{
						"internalType": "bool",
						"name": "useTotalSurplus",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "cashOutTaxRate",
						"type": "uint256"
					},
					{
						"internalType": "bytes",
						"name": "metadata",
						"type": "bytes"
					}
				],
				"internalType": "struct JBBeforeCashOutRecordedContext",
				"name": "context",
				"type": "tuple"
			}
		],
		"name": "beforeCashOutRecordedWith",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "cashOutTaxRate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "cashOutCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalSupply",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "contract IJBCashOutHook",
						"name": "hook",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "bytes",
						"name": "metadata",
						"type": "bytes"
					}
				],
				"internalType": "struct JBCashOutHookSpecification[]",
				"name": "hookSpecifications",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "terminal",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "payer",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "token",
								"type": "address"
							},
							{
								"internalType": "uint8",
								"name": "decimals",
								"type": "uint8"
							},
							{
								"internalType": "uint32",
								"name": "currency",
								"type": "uint32"
							},
							{
								"internalType": "uint256",
								"name": "value",
								"type": "uint256"
							}
						],
						"internalType": "struct JBTokenAmount",
						"name": "amount",
						"type": "tuple"
					},
					{
						"internalType": "uint256",
						"name": "projectId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rulesetId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "beneficiary",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "weight",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "reservedPercent",
						"type": "uint256"
					},
					{
						"internalType": "bytes",
						"name": "metadata",
						"type": "bytes"
					}
				],
				"internalType": "struct JBBeforePayRecordedContext",
				"name": "context",
				"type": "tuple"
			}
		],
		"name": "beforePayRecordedWith",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "weight",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "contract IJBPayHook",
						"name": "hook",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "bytes",
						"name": "metadata",
						"type": "bytes"
					}
				],
				"internalType": "struct JBPayHookSpecification[]",
				"name": "hookSpecifications",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			}
		],
		"name": "dataHookOf",
		"outputs": [
			{
				"internalType": "contract IJBRulesetDataHook",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"components": [
					{
						"components": [
							{
								"internalType": "contract IJBTerminal",
								"name": "terminal",
								"type": "address"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "token",
										"type": "address"
									},
									{
										"internalType": "uint8",
										"name": "decimals",
										"type": "uint8"
									},
									{
										"internalType": "uint32",
										"name": "currency",
										"type": "uint32"
									}
								],
								"internalType": "struct JBAccountingContext[]",
								"name": "accountingContextsToAccept",
								"type": "tuple[]"
							}
						],
						"internalType": "struct JBTerminalConfig[]",
						"name": "terminalConfigurations",
						"type": "tuple[]"
					},
					{
						"internalType": "string",
						"name": "projectUri",
						"type": "string"
					},
					{
						"components": [
							{
								"internalType": "uint24",
								"name": "category",
								"type": "uint24"
							},
							{
								"internalType": "uint104",
								"name": "minimumPrice",
								"type": "uint104"
							},
							{
								"internalType": "uint32",
								"name": "minimumTotalSupply",
								"type": "uint32"
							},
							{
								"internalType": "uint32",
								"name": "maximumTotalSupply",
								"type": "uint32"
							},
							{
								"internalType": "address[]",
								"name": "allowedAddresses",
								"type": "address[]"
							}
						],
						"internalType": "struct CTDeployerAllowedPost[]",
						"name": "allowedPosts",
						"type": "tuple[]"
					},
					{
						"internalType": "string",
						"name": "contractUri",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "symbol",
						"type": "string"
					},
					{
						"internalType": "bytes32",
						"name": "salt",
						"type": "bytes32"
					}
				],
				"internalType": "struct CTProjectConfig",
				"name": "projectConfig",
				"type": "tuple"
			},
			{
				"components": [
					{
						"components": [
							{
								"internalType": "contract IJBSuckerDeployer",
								"name": "deployer",
								"type": "address"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "localToken",
										"type": "address"
									},
									{
										"internalType": "uint32",
										"name": "minGas",
										"type": "uint32"
									},
									{
										"internalType": "address",
										"name": "remoteToken",
										"type": "address"
									},
									{
										"internalType": "uint256",
										"name": "minBridgeAmount",
										"type": "uint256"
									}
								],
								"internalType": "struct JBTokenMapping[]",
								"name": "mappings",
								"type": "tuple[]"
							}
						],
						"internalType": "struct JBSuckerDeployerConfig[]",
						"name": "deployerConfigurations",
						"type": "tuple[]"
					},
					{
						"internalType": "bytes32",
						"name": "salt",
						"type": "bytes32"
					}
				],
				"internalType": "struct CTSuckerDeploymentConfig",
				"name": "suckerDeploymentConfiguration",
				"type": "tuple"
			},
			{
				"internalType": "contract IJBController",
				"name": "controller",
				"type": "address"
			}
		],
		"name": "deployProjectFor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"internalType": "contract IJB721TiersHook",
				"name": "hook",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"components": [
					{
						"components": [
							{
								"internalType": "contract IJBSuckerDeployer",
								"name": "deployer",
								"type": "address"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "localToken",
										"type": "address"
									},
									{
										"internalType": "uint32",
										"name": "minGas",
										"type": "uint32"
									},
									{
										"internalType": "address",
										"name": "remoteToken",
										"type": "address"
									},
									{
										"internalType": "uint256",
										"name": "minBridgeAmount",
										"type": "uint256"
									}
								],
								"internalType": "struct JBTokenMapping[]",
								"name": "mappings",
								"type": "tuple[]"
							}
						],
						"internalType": "struct JBSuckerDeployerConfig[]",
						"name": "deployerConfigurations",
						"type": "tuple[]"
					},
					{
						"internalType": "bytes32",
						"name": "salt",
						"type": "bytes32"
					}
				],
				"internalType": "struct CTSuckerDeploymentConfig",
				"name": "suckerDeploymentConfiguration",
				"type": "tuple"
			}
		],
		"name": "deploySuckersFor",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "suckers",
				"type": "address[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "hasMintPermissionFor",
		"outputs": [
			{
				"internalType": "bool",
				"name": "flag",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "forwarder",
				"type": "address"
			}
		],
		"name": "isTrustedForwarder",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "onERC721Received",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "trustedForwarder",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "permissionId",
				"type": "uint256"
			}
		],
		"name": "JBPermissioned_Unauthorized",
		"type": "error"
	}
];
  
// Remove the duplicated functions and keep only the specific deployment functions
const tx_deploy_project = async (name, symbol, owner, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses, chainIds, salt) => {
  const projectUri = "ipfs://QmaJzQjaFKxU2LLyqPTpZoGU47owQcmmvVCP1p4YqeuMUy";
  const contractUri = "";
  const allowedPost = { hook: "0x0000000000000000000000000000000000000000", category: 0, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses};
  
  // Map of chain pairs to deployer addresses
  const SUCKER_DEPLOYERS = {
    // Mainnets
    '1-10': '0x172ad9b3df724ee0422ea85b7799a3f7ca761816',
    '10-1': '0x172ad9b3df724ee0422ea85b7799a3f7ca761816',
    '1-42161': '0xf816d238aef247f86cc73593961cb8fb55ca4bcf',
    '42161-1': '0xf816d238aef247f86cc73593961cb8fb55ca4bcf',
    '1-8453': '0x195b4dce646eba3c3e9ae56708558b1a96f88814',
    '8453-1': '0x195b4dce646eba3c3e9ae56708558b1a96f88814',
    '10-42161': '0xaa0dbdf6354dd238d289c359c74f998ddec8bcd1',
    '42161-10': '0xaa0dbdf6354dd238d289c359c74f998ddec8bcd1',
    '10-8453': '0x58683931b146697d094c660aec1f4a8f564a3d7d',
    '8453-10': '0x58683931b146697d094c660aec1f4a8f564a3d7d',
    '42161-8453': '0xc295a8926f1ed0a6e3b6cbdb1d28b9d6b388c8a7',
    '8453-42161': '0xc295a8926f1ed0a6e3b6cbdb1d28b9d6b388c8a7',
    // Testnets (Sepolia: 11155111, Optimism Sepolia: 11155420, Base Sepolia: 84532, Arbitrum Sepolia: 421614)
    '11155111-11155420': '0x172ad9b3df724ee0422ea85b7799a3f7ca761816',
    '11155420-11155111': '0x172ad9b3df724ee0422ea85b7799a3f7ca761816',
    '11155111-421614': '0xf816d238aef247f86cc73593961cb8fb55ca4bcf',
    '421614-11155111': '0xf816d238aef247f86cc73593961cb8fb55ca4bcf',
    '11155111-84532': '0x195b4dce646eba3c3e9ae56708558b1a96f88814',
    '84532-11155111': '0x195b4dce646eba3c3e9ae56708558b1a96f88814',
    '11155420-421614': '0xaa0dbdf6354dd238d289c359c74f998ddec8bcd1',
    '421614-11155420': '0xaa0dbdf6354dd238d289c359c74f998ddec8bcd1',
    '11155420-84532': '0x58683931b146697d094c660aec1f4a8f564a3d7d',
    '84532-11155420': '0x58683931b146697d094c660aec1f4a8f564a3d7d',
    '421614-84532': '0xc295a8926f1ed0a6e3b6cbdb1d28b9d6b388c8a7',
    '84532-421614': '0xc295a8926f1ed0a6e3b6cbdb1d28b9d6b388c8a7',
  };

  const buildDeploymentData = async (chainId) => {
    const accountingContextToAccept = { token:"0x000000000000000000000000000000000000EEEe", decimals: 18, currency: 61166 };
    const terminal = terminalContract(chainId);
    const terminalConfiguration = { terminal, accountingContextsToAccept: [accountingContextToAccept] };

    // Build JBSuckerDeployerConfig array for this chain
    const otherChainIds = chainIds.filter(id => id !== chainId);
    const deployerConfigurations = otherChainIds.map(remoteChainId => {
      const deployerKey = `${chainId}-${remoteChainId}`;
      const deployer = SUCKER_DEPLOYERS[deployerKey];
      return {
        deployer,
        mappings: [{
          localToken: "0x000000000000000000000000000000000000EEEe",
          minGas: 200000,
          remoteToken: "0x000000000000000000000000000000000000EEEe",
          minBridgeAmount: "10000000000000000"
        }]
      };
    });

	const controller = controllerContract(chainId);

    return [
      owner,
      [[terminalConfiguration],
      projectUri,
      [allowedPost],
      contractUri,
      name,
      symbol,
      salt],
      [deployerConfigurations, salt ],
	  controller
    ];
  };
  
  const receipt = await handleDeployment(
    chainIds,
    buildDeploymentData,
    croptopDeployerContract,
    croptopDeployerContractABI,
    "deployProjectFor"
  );

  if (!receipt) return false;

  // If this is a Relayr quote, return it directly
  if (receipt.payment_info || receipt.bundle_uuid) {
    return receipt;
  }

  const interface = new ethers.Interface(croptopDeployerContractABI);
  const decodedLog = interface.parseLog(receipt.logs[0]);
  const collectionAddress = decodedLog.args[1]; 
  return collectionAddress;
}

const tx_deploy_revnet = async (name, symbol, owner, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses, stage1AutomintTokenAmount, stage2AutomintTokenAmount, stage3AutomintTokenAmount, stage1InitialIssuanceAmount, stage2InitialIssuanceAmount, stage3InitialIssuanceAmount, stage1SplitPercent, stage2SplitPercent, stage3SplitPercent, stage1PriceIncreasePercent, stage2PriceIncreasePercent, stage3PriceIncreasePercent, stage1PriceIncreaseFrequency, stage2PriceIncreaseFrequency, stage3PriceIncreaseFrequency, stage1CashOutTaxRate, stage2CashOutTaxRate, stage3CashOutTaxRate, stage2StartsAtOrAfter, stage3StartsAtOrAfter, chainIds, salt) => {
  const projectUri = "ipfs://QmaJzQjaFKxU2LLyqPTpZoGU47owQcmmvVCP1p4YqeuMUy";
  const contractUri = "";
  const allowedPost = { hook: "0x0000000000000000000000000000000000000000", category: 0, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses};
  
  const buildDeploymentData = async (chainId) => {
    const terminal = terminalContract(chainId);
    const loans = loansContract(chainId);
    const accountingContextToAccept = { token:"0x000000000000000000000000000000000000EEEe", decimals: 18, currency: 61166 };
    const terminalConfiguration = { terminal, accountingContextsToAccept: [accountingContextToAccept] };
    
    const baseCurrency = 1;
    const stage1StartsAtOrAfter = 1;
    const autoMintStage1 = stage1AutomintTokenAmount == 0 ? [] : [{ chainId, count: stage1AutomintTokenAmount, beneficiary: owner}];
    const stageConfiguration1 = { startsAtOrAfter: stage1StartsAtOrAfter, splitPercent: stage1SplitPercent, initialIssuance: stage1InitialIssuanceAmount, issuanceDecayFrequency: stage1PriceIncreaseFrequency, issuanceDecayPercent: stage1PriceIncreasePercent, cashOutTaxRate: stage1CashOutTaxRate, autoMints: autoMintStage1, extraMetadata: "0x0000" };
    
    const stageConfigurations = [stageConfiguration1];
    if (stage2StartsAtOrAfter != 0) {
      const autoMintStage2 = stage2AutomintTokenAmount == 0 ? [] : [{ chainId, count: stage2AutomintTokenAmount, beneficiary: owner}];
      stageConfigurations.push({startsAtOrAfter: stage2StartsAtOrAfter, splitPercent: stage2SplitPercent, initialIssuance: stage2InitialIssuanceAmount, issuanceDecayFrequency: stage2PriceIncreaseFrequency, issuanceDecayPercent: stage2PriceIncreasePercent, cashOutTaxRate: stage2CashOutTaxRate, autoMints: autoMintStage2, extraMetadata: "0x0000"}); 
    }
    if (stage3StartsAtOrAfter != 0) {
      const autoMintStage3 = stage3AutomintTokenAmount == 0 ? [] : [{ chainId, count: stage3AutomintTokenAmount, beneficiary: owner}];
      stageConfigurations.push({startsAtOrAfter: stage3StartsAtOrAfter, splitPercent: stage3SplitPercent, initialIssuance: stage3InitialIssuanceAmount, issuanceDecayFrequency: stage3PriceIncreaseFrequency, issuanceDecayPercent: stage3PriceIncreasePercent, cashOutTaxRate: stage3CashOutTaxRate, autoMints: autoMintStage3, extraMetadata: "0x0000" }); 
    }
    
    const description = { name, ticker: symbol, uri: projectUri, salt };
    const loanSource = { token: "0x000000000000000000000000000000000000EEEe", terminal };
    const revnetConfiguration = { description, baseCurrency, splitOperator: owner, stageConfigurations, loanSources: [loanSource], loans, allowCrosschainSuckerExtension: true };
    const buybackHookConfiguration = { hook: "0x0000000000000000000000000000000000000000", poolConfigurations: []};
    const baseUri = "ipfs://";
    const tokenUriResolver = "0x0000000000000000000000000000000000000000";
    const tiers = [];
    const currency = 1;
    const decimals = 18;
    const prices = pricesContract(chainId);
    const tiersConfig = { tiers, currency, decimals, prices };
    const reserveBeneficiary = "0x0000000000000000000000000000000000000000";
    const flags = { noNewTiersWithReserves: false, noNewTiersWithVotes: false, noNewTiersWithOwnerMinting: false, preventOverspending: false };
    const baseline721HookConfiguration = { name, symbol, baseUri, tokenUriResolver, contractUri, tiersConfig, reserveBeneficiary, flags };
    const hookConfiguration = {baseline721HookConfiguration, splitOperatorCanAdjustTiers: true, splitOperatorCanUpdateMetadata: true, splitOperatorCanMint: false, splitOperatorCanIncreaseDiscountPercent: true};
    const suckerDeploymentConfiguration = { deployerConfigurations: [], salt };
    
    return [0, revnetConfiguration, [terminalConfiguration], buybackHookConfiguration, suckerDeploymentConfiguration, hookConfiguration, [allowedPost]];
  };

  const receipt = await handleDeployment(
    chainIds,
    buildDeploymentData,
    revnetDeployerContract,
    revnetDeployerContractABI,
    "deployWith721sFor"
  );

  if (!receipt) return false;

  // If this is a Relayr quote, return it directly
  if (receipt.payment_info || receipt.bundle_uuid) {
    return receipt;
  }

  const interface = new ethers.Interface(revnetDeployerContractABI);
  const decodedLog = interface.parseLog(receipt.logs[0]);
  const collectionAddress = decodedLog.args[1]; 
  return collectionAddress;
}
