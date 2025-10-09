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

const buyHookContract = (chainId) => {
  switch (chainId) {
    case 1: // Ethereum Mainnet
      return "0xd342490ec41d5982c23951253a74a1c940fe0f9b";
    case 8453: // Base
      return "0xb6133a222315f8e9d25e7c77bac5ddeb3451d088";
    case 10: // Optimism
      return "0x318f8aa6a95cb83419985c0d797c762f5a7824f3";
    case 42161: // Arbitrum
      return "0x4ac3e20edd1d398def0dfb44d3adb9fc244f0320";
    case 11155111:
      return "0xf082e3218a690ea6386506bed338f6878d21815f";
    case 11155420:
      return "0x79e5ca5ebe4f110965248afad88b8e539e1aa8fd";
    case 84532:
      return "0x79e5ca5ebe4f110965248afad88b8e539e1aa8fd";
    case 421614:
      return "0xb35ab801c008a64d8f3eea0a8a6209b0d176f2df";
  }
}

const buyHookRegistryContract = (chainId) => {
  switch (chainId) {
    case 1: // Ethereum Mainnet
      return "0x9e1e0fb70bc4661f2cc2d5eddd87a9d582a12b1a";	
    case 8453: // Base
      return "0x9e1e0fb70bc4661f2cc2d5eddd87a9d582a12b1a";
    case 10: // Optimism
      return "0x9e1e0fb70bc4661f2cc2d5eddd87a9d582a12b1a";
    case 42161: // Arbitrum
      return "0x9e1e0fb70bc4661f2cc2d5eddd87a9d582a12b1a";
    case 11155111:
      return "0x9e1e0fb70bc4661f2cc2d5eddd87a9d582a12b1a";
    case 11155420:
      return "0x9e1e0fb70bc4661f2cc2d5eddd87a9d582a12b1a";
    case 84532:
      return "0x9e1e0fb70bc4661f2cc2d5eddd87a9d582a12b1a";
    case 421614:
      return "0x9e1e0fb70bc4661f2cc2d5eddd87a9d582a12b1a";
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

const revnetDeployerContractABI = [
	{
		"inputs": [
			{
				"internalType": "contract IJBController",
				"name": "controller",
				"type": "address"
			},
			{
				"internalType": "contract IJBSuckerRegistry",
				"name": "suckerRegistry",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "feeRevnetId",
				"type": "uint256"
			},
			{
				"internalType": "contract IJB721TiersHookDeployer",
				"name": "hookDeployer",
				"type": "address"
			},
			{
				"internalType": "contract CTPublisher",
				"name": "publisher",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "trustedForwarder",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "CASH_OUT_DELAY",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "CONTROLLER",
		"outputs": [
			{
				"internalType": "contract IJBController",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "DIRECTORY",
		"outputs": [
			{
				"internalType": "contract IJBDirectory",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "FEE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "FEE_REVNET_ID",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "HOOK_DEPLOYER",
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
				"internalType": "contract CTPublisher",
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
						"name": "reclaimedAmount",
						"type": "tuple"
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
						"name": "forwardedAmount",
						"type": "tuple"
					},
					{
						"internalType": "uint256",
						"name": "cashOutTaxRate",
						"type": "uint256"
					},
					{
						"internalType": "address payable",
						"name": "beneficiary",
						"type": "address"
					},
					{
						"internalType": "bytes",
						"name": "hookMetadata",
						"type": "bytes"
					},
					{
						"internalType": "bytes",
						"name": "cashOutMetadata",
						"type": "bytes"
					}
				],
				"internalType": "struct JBAfterCashOutRecordedContext",
				"name": "context",
				"type": "tuple"
			}
		],
		"name": "afterCashOutRecordedWith",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "revnetId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "stageId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			}
		],
		"name": "amountToAutoIssue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "revnetId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "stageId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			}
		],
		"name": "autoIssueFor",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"name": "revnetId",
				"type": "uint256"
			}
		],
		"name": "buybackHookOf",
		"outputs": [
			{
				"internalType": "contract IJBRulesetDataHook",
				"name": "buybackHook",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "revnetId",
				"type": "uint256"
			}
		],
		"name": "cashOutDelayOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "cashOutDelay",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "revnetId",
				"type": "uint256"
			},
			{
				"components": [
					{
						"components": [
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "ticker",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "uri",
								"type": "string"
							},
							{
								"internalType": "bytes32",
								"name": "salt",
								"type": "bytes32"
							}
						],
						"internalType": "struct REVDescription",
						"name": "description",
						"type": "tuple"
					},
					{
						"internalType": "uint32",
						"name": "baseCurrency",
						"type": "uint32"
					},
					{
						"internalType": "address",
						"name": "splitOperator",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "uint48",
								"name": "startsAtOrAfter",
								"type": "uint48"
							},
							{
								"components": [
									{
										"internalType": "uint32",
										"name": "chainId",
										"type": "uint32"
									},
									{
										"internalType": "uint104",
										"name": "count",
										"type": "uint104"
									},
									{
										"internalType": "address",
										"name": "beneficiary",
										"type": "address"
									}
								],
								"internalType": "struct REVAutoIssuance[]",
								"name": "autoIssuances",
								"type": "tuple[]"
							},
							{
								"internalType": "uint16",
								"name": "splitPercent",
								"type": "uint16"
							},
							{
								"components": [
									{
										"internalType": "uint32",
										"name": "percent",
										"type": "uint32"
									},
									{
										"internalType": "uint64",
										"name": "projectId",
										"type": "uint64"
									},
									{
										"internalType": "address payable",
										"name": "beneficiary",
										"type": "address"
									},
									{
										"internalType": "bool",
										"name": "preferAddToBalance",
										"type": "bool"
									},
									{
										"internalType": "uint48",
										"name": "lockedUntil",
										"type": "uint48"
									},
									{
										"internalType": "contract IJBSplitHook",
										"name": "hook",
										"type": "address"
									}
								],
								"internalType": "struct JBSplit[]",
								"name": "splits",
								"type": "tuple[]"
							},
							{
								"internalType": "uint112",
								"name": "initialIssuance",
								"type": "uint112"
							},
							{
								"internalType": "uint32",
								"name": "issuanceCutFrequency",
								"type": "uint32"
							},
							{
								"internalType": "uint32",
								"name": "issuanceCutPercent",
								"type": "uint32"
							},
							{
								"internalType": "uint16",
								"name": "cashOutTaxRate",
								"type": "uint16"
							},
							{
								"internalType": "uint16",
								"name": "extraMetadata",
								"type": "uint16"
							}
						],
						"internalType": "struct REVStageConfig[]",
						"name": "stageConfigurations",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "token",
								"type": "address"
							},
							{
								"internalType": "contract IJBPayoutTerminal",
								"name": "terminal",
								"type": "address"
							}
						],
						"internalType": "struct REVLoanSource[]",
						"name": "loanSources",
						"type": "tuple[]"
					},
					{
						"internalType": "address",
						"name": "loans",
						"type": "address"
					}
				],
				"internalType": "struct REVConfig",
				"name": "configuration",
				"type": "tuple"
			},
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
				"components": [
					{
						"internalType": "contract IJBRulesetDataHook",
						"name": "dataHook",
						"type": "address"
					},
					{
						"internalType": "contract IJBBuybackHook",
						"name": "hookToConfigure",
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
								"internalType": "uint24",
								"name": "fee",
								"type": "uint24"
							},
							{
								"internalType": "uint32",
								"name": "twapWindow",
								"type": "uint32"
							}
						],
						"internalType": "struct REVBuybackPoolConfig[]",
						"name": "poolConfigurations",
						"type": "tuple[]"
					}
				],
				"internalType": "struct REVBuybackHookConfig",
				"name": "buybackHookConfiguration",
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
				"internalType": "struct REVSuckerDeploymentConfig",
				"name": "suckerDeploymentConfiguration",
				"type": "tuple"
			}
		],
		"name": "deployFor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "revnetId",
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
				"internalType": "struct REVSuckerDeploymentConfig",
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
				"name": "revnetId",
				"type": "uint256"
			},
			{
				"components": [
					{
						"components": [
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "ticker",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "uri",
								"type": "string"
							},
							{
								"internalType": "bytes32",
								"name": "salt",
								"type": "bytes32"
							}
						],
						"internalType": "struct REVDescription",
						"name": "description",
						"type": "tuple"
					},
					{
						"internalType": "uint32",
						"name": "baseCurrency",
						"type": "uint32"
					},
					{
						"internalType": "address",
						"name": "splitOperator",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "uint48",
								"name": "startsAtOrAfter",
								"type": "uint48"
							},
							{
								"components": [
									{
										"internalType": "uint32",
										"name": "chainId",
										"type": "uint32"
									},
									{
										"internalType": "uint104",
										"name": "count",
										"type": "uint104"
									},
									{
										"internalType": "address",
										"name": "beneficiary",
										"type": "address"
									}
								],
								"internalType": "struct REVAutoIssuance[]",
								"name": "autoIssuances",
								"type": "tuple[]"
							},
							{
								"internalType": "uint16",
								"name": "splitPercent",
								"type": "uint16"
							},
							{
								"components": [
									{
										"internalType": "uint32",
										"name": "percent",
										"type": "uint32"
									},
									{
										"internalType": "uint64",
										"name": "projectId",
										"type": "uint64"
									},
									{
										"internalType": "address payable",
										"name": "beneficiary",
										"type": "address"
									},
									{
										"internalType": "bool",
										"name": "preferAddToBalance",
										"type": "bool"
									},
									{
										"internalType": "uint48",
										"name": "lockedUntil",
										"type": "uint48"
									},
									{
										"internalType": "contract IJBSplitHook",
										"name": "hook",
										"type": "address"
									}
								],
								"internalType": "struct JBSplit[]",
								"name": "splits",
								"type": "tuple[]"
							},
							{
								"internalType": "uint112",
								"name": "initialIssuance",
								"type": "uint112"
							},
							{
								"internalType": "uint32",
								"name": "issuanceCutFrequency",
								"type": "uint32"
							},
							{
								"internalType": "uint32",
								"name": "issuanceCutPercent",
								"type": "uint32"
							},
							{
								"internalType": "uint16",
								"name": "cashOutTaxRate",
								"type": "uint16"
							},
							{
								"internalType": "uint16",
								"name": "extraMetadata",
								"type": "uint16"
							}
						],
						"internalType": "struct REVStageConfig[]",
						"name": "stageConfigurations",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "token",
								"type": "address"
							},
							{
								"internalType": "contract IJBPayoutTerminal",
								"name": "terminal",
								"type": "address"
							}
						],
						"internalType": "struct REVLoanSource[]",
						"name": "loanSources",
						"type": "tuple[]"
					},
					{
						"internalType": "address",
						"name": "loans",
						"type": "address"
					}
				],
				"internalType": "struct REVConfig",
				"name": "configuration",
				"type": "tuple"
			},
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
				"components": [
					{
						"internalType": "contract IJBRulesetDataHook",
						"name": "dataHook",
						"type": "address"
					},
					{
						"internalType": "contract IJBBuybackHook",
						"name": "hookToConfigure",
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
								"internalType": "uint24",
								"name": "fee",
								"type": "uint24"
							},
							{
								"internalType": "uint32",
								"name": "twapWindow",
								"type": "uint32"
							}
						],
						"internalType": "struct REVBuybackPoolConfig[]",
						"name": "poolConfigurations",
						"type": "tuple[]"
					}
				],
				"internalType": "struct REVBuybackHookConfig",
				"name": "buybackHookConfiguration",
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
				"internalType": "struct REVSuckerDeploymentConfig",
				"name": "suckerDeploymentConfiguration",
				"type": "tuple"
			},
			{
				"components": [
					{
						"components": [
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
								"internalType": "string",
								"name": "baseUri",
								"type": "string"
							},
							{
								"internalType": "contract IJB721TokenUriResolver",
								"name": "tokenUriResolver",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "contractUri",
								"type": "string"
							},
							{
								"components": [
									{
										"components": [
											{
												"internalType": "uint104",
												"name": "price",
												"type": "uint104"
											},
											{
												"internalType": "uint32",
												"name": "initialSupply",
												"type": "uint32"
											},
											{
												"internalType": "uint32",
												"name": "votingUnits",
												"type": "uint32"
											},
											{
												"internalType": "uint16",
												"name": "reserveFrequency",
												"type": "uint16"
											},
											{
												"internalType": "address",
												"name": "reserveBeneficiary",
												"type": "address"
											},
											{
												"internalType": "bytes32",
												"name": "encodedIPFSUri",
												"type": "bytes32"
											},
											{
												"internalType": "uint24",
												"name": "category",
												"type": "uint24"
											},
											{
												"internalType": "uint8",
												"name": "discountPercent",
												"type": "uint8"
											},
											{
												"internalType": "bool",
												"name": "allowOwnerMint",
												"type": "bool"
											},
											{
												"internalType": "bool",
												"name": "useReserveBeneficiaryAsDefault",
												"type": "bool"
											},
											{
												"internalType": "bool",
												"name": "transfersPausable",
												"type": "bool"
											},
											{
												"internalType": "bool",
												"name": "useVotingUnits",
												"type": "bool"
											},
											{
												"internalType": "bool",
												"name": "cannotBeRemoved",
												"type": "bool"
											},
											{
												"internalType": "bool",
												"name": "cannotIncreaseDiscountPercent",
												"type": "bool"
											}
										],
										"internalType": "struct JB721TierConfig[]",
										"name": "tiers",
										"type": "tuple[]"
									},
									{
										"internalType": "uint32",
										"name": "currency",
										"type": "uint32"
									},
									{
										"internalType": "uint8",
										"name": "decimals",
										"type": "uint8"
									},
									{
										"internalType": "contract IJBPrices",
										"name": "prices",
										"type": "address"
									}
								],
								"internalType": "struct JB721InitTiersConfig",
								"name": "tiersConfig",
								"type": "tuple"
							},
							{
								"internalType": "address",
								"name": "reserveBeneficiary",
								"type": "address"
							},
							{
								"components": [
									{
										"internalType": "bool",
										"name": "noNewTiersWithReserves",
										"type": "bool"
									},
									{
										"internalType": "bool",
										"name": "noNewTiersWithVotes",
										"type": "bool"
									},
									{
										"internalType": "bool",
										"name": "noNewTiersWithOwnerMinting",
										"type": "bool"
									},
									{
										"internalType": "bool",
										"name": "preventOverspending",
										"type": "bool"
									}
								],
								"internalType": "struct JB721TiersHookFlags",
								"name": "flags",
								"type": "tuple"
							}
						],
						"internalType": "struct JBDeploy721TiersHookConfig",
						"name": "baseline721HookConfiguration",
						"type": "tuple"
					},
					{
						"internalType": "bytes32",
						"name": "salt",
						"type": "bytes32"
					},
					{
						"internalType": "bool",
						"name": "splitOperatorCanAdjustTiers",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "splitOperatorCanUpdateMetadata",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "splitOperatorCanMint",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "splitOperatorCanIncreaseDiscountPercent",
						"type": "bool"
					}
				],
				"internalType": "struct REVDeploy721TiersHookConfig",
				"name": "tiered721HookConfiguration",
				"type": "tuple"
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
				"internalType": "struct REVCroptopAllowedPost[]",
				"name": "allowedPosts",
				"type": "tuple[]"
			}
		],
		"name": "deployWith721sFor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
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
				"name": "revnetId",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "uint48",
						"name": "cycleNumber",
						"type": "uint48"
					},
					{
						"internalType": "uint48",
						"name": "id",
						"type": "uint48"
					},
					{
						"internalType": "uint48",
						"name": "basedOnId",
						"type": "uint48"
					},
					{
						"internalType": "uint48",
						"name": "start",
						"type": "uint48"
					},
					{
						"internalType": "uint32",
						"name": "duration",
						"type": "uint32"
					},
					{
						"internalType": "uint112",
						"name": "weight",
						"type": "uint112"
					},
					{
						"internalType": "uint32",
						"name": "weightCutPercent",
						"type": "uint32"
					},
					{
						"internalType": "contract IJBRulesetApprovalHook",
						"name": "approvalHook",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "metadata",
						"type": "uint256"
					}
				],
				"internalType": "struct JBRuleset",
				"name": "ruleset",
				"type": "tuple"
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
				"internalType": "uint256",
				"name": "revnetId",
				"type": "uint256"
			}
		],
		"name": "hashedEncodedConfigurationOf",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "hashedEncodedConfiguration",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "revnetId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "isSplitOperatorOf",
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
				"internalType": "uint256",
				"name": "revnetId",
				"type": "uint256"
			}
		],
		"name": "loansOf",
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
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "",
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
				"internalType": "uint256",
				"name": "revnetId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "newSplitOperator",
				"type": "address"
			}
		],
		"name": "setSplitOperatorOf",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "revnetId",
				"type": "uint256"
			}
		],
		"name": "tiered721HookOf",
		"outputs": [
			{
				"internalType": "contract IJB721TiersHook",
				"name": "tiered721Hook",
				"type": "address"
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "revnetId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "stageId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "caller",
				"type": "address"
			}
		],
		"name": "AutoIssue",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "revnetId",
				"type": "uint256"
			},
			{
				"components": [
					{
						"components": [
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "ticker",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "uri",
								"type": "string"
							},
							{
								"internalType": "bytes32",
								"name": "salt",
								"type": "bytes32"
							}
						],
						"internalType": "struct REVDescription",
						"name": "description",
						"type": "tuple"
					},
					{
						"internalType": "uint32",
						"name": "baseCurrency",
						"type": "uint32"
					},
					{
						"internalType": "address",
						"name": "splitOperator",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "uint48",
								"name": "startsAtOrAfter",
								"type": "uint48"
							},
							{
								"components": [
									{
										"internalType": "uint32",
										"name": "chainId",
										"type": "uint32"
									},
									{
										"internalType": "uint104",
										"name": "count",
										"type": "uint104"
									},
									{
										"internalType": "address",
										"name": "beneficiary",
										"type": "address"
									}
								],
								"internalType": "struct REVAutoIssuance[]",
								"name": "autoIssuances",
								"type": "tuple[]"
							},
							{
								"internalType": "uint16",
								"name": "splitPercent",
								"type": "uint16"
							},
							{
								"components": [
									{
										"internalType": "uint32",
										"name": "percent",
										"type": "uint32"
									},
									{
										"internalType": "uint64",
										"name": "projectId",
										"type": "uint64"
									},
									{
										"internalType": "address payable",
										"name": "beneficiary",
										"type": "address"
									},
									{
										"internalType": "bool",
										"name": "preferAddToBalance",
										"type": "bool"
									},
									{
										"internalType": "uint48",
										"name": "lockedUntil",
										"type": "uint48"
									},
									{
										"internalType": "contract IJBSplitHook",
										"name": "hook",
										"type": "address"
									}
								],
								"internalType": "struct JBSplit[]",
								"name": "splits",
								"type": "tuple[]"
							},
							{
								"internalType": "uint112",
								"name": "initialIssuance",
								"type": "uint112"
							},
							{
								"internalType": "uint32",
								"name": "issuanceCutFrequency",
								"type": "uint32"
							},
							{
								"internalType": "uint32",
								"name": "issuanceCutPercent",
								"type": "uint32"
							},
							{
								"internalType": "uint16",
								"name": "cashOutTaxRate",
								"type": "uint16"
							},
							{
								"internalType": "uint16",
								"name": "extraMetadata",
								"type": "uint16"
							}
						],
						"internalType": "struct REVStageConfig[]",
						"name": "stageConfigurations",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "token",
								"type": "address"
							},
							{
								"internalType": "contract IJBPayoutTerminal",
								"name": "terminal",
								"type": "address"
							}
						],
						"internalType": "struct REVLoanSource[]",
						"name": "loanSources",
						"type": "tuple[]"
					},
					{
						"internalType": "address",
						"name": "loans",
						"type": "address"
					}
				],
				"indexed": false,
				"internalType": "struct REVConfig",
				"name": "configuration",
				"type": "tuple"
			},
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
				"indexed": false,
				"internalType": "struct JBTerminalConfig[]",
				"name": "terminalConfigurations",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"internalType": "contract IJBRulesetDataHook",
						"name": "dataHook",
						"type": "address"
					},
					{
						"internalType": "contract IJBBuybackHook",
						"name": "hookToConfigure",
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
								"internalType": "uint24",
								"name": "fee",
								"type": "uint24"
							},
							{
								"internalType": "uint32",
								"name": "twapWindow",
								"type": "uint32"
							}
						],
						"internalType": "struct REVBuybackPoolConfig[]",
						"name": "poolConfigurations",
						"type": "tuple[]"
					}
				],
				"indexed": false,
				"internalType": "struct REVBuybackHookConfig",
				"name": "buybackHookConfiguration",
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
				"indexed": false,
				"internalType": "struct REVSuckerDeploymentConfig",
				"name": "suckerDeploymentConfiguration",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "uint48",
						"name": "mustStartAtOrAfter",
						"type": "uint48"
					},
					{
						"internalType": "uint32",
						"name": "duration",
						"type": "uint32"
					},
					{
						"internalType": "uint112",
						"name": "weight",
						"type": "uint112"
					},
					{
						"internalType": "uint32",
						"name": "weightCutPercent",
						"type": "uint32"
					},
					{
						"internalType": "contract IJBRulesetApprovalHook",
						"name": "approvalHook",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "uint16",
								"name": "reservedPercent",
								"type": "uint16"
							},
							{
								"internalType": "uint16",
								"name": "cashOutTaxRate",
								"type": "uint16"
							},
							{
								"internalType": "uint32",
								"name": "baseCurrency",
								"type": "uint32"
							},
							{
								"internalType": "bool",
								"name": "pausePay",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "pauseCreditTransfers",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "allowOwnerMinting",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "allowSetCustomToken",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "allowTerminalMigration",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "allowSetTerminals",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "allowSetController",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "allowAddAccountingContext",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "allowAddPriceFeed",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "ownerMustSendPayouts",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "holdFees",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "useTotalSurplusForCashOuts",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "useDataHookForPay",
								"type": "bool"
							},
							{
								"internalType": "bool",
								"name": "useDataHookForCashOut",
								"type": "bool"
							},
							{
								"internalType": "address",
								"name": "dataHook",
								"type": "address"
							},
							{
								"internalType": "uint16",
								"name": "metadata",
								"type": "uint16"
							}
						],
						"internalType": "struct JBRulesetMetadata",
						"name": "metadata",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "groupId",
								"type": "uint256"
							},
							{
								"components": [
									{
										"internalType": "uint32",
										"name": "percent",
										"type": "uint32"
									},
									{
										"internalType": "uint64",
										"name": "projectId",
										"type": "uint64"
									},
									{
										"internalType": "address payable",
										"name": "beneficiary",
										"type": "address"
									},
									{
										"internalType": "bool",
										"name": "preferAddToBalance",
										"type": "bool"
									},
									{
										"internalType": "uint48",
										"name": "lockedUntil",
										"type": "uint48"
									},
									{
										"internalType": "contract IJBSplitHook",
										"name": "hook",
										"type": "address"
									}
								],
								"internalType": "struct JBSplit[]",
								"name": "splits",
								"type": "tuple[]"
							}
						],
						"internalType": "struct JBSplitGroup[]",
						"name": "splitGroups",
						"type": "tuple[]"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "terminal",
								"type": "address"
							},
							{
								"internalType": "address",
								"name": "token",
								"type": "address"
							},
							{
								"components": [
									{
										"internalType": "uint224",
										"name": "amount",
										"type": "uint224"
									},
									{
										"internalType": "uint32",
										"name": "currency",
										"type": "uint32"
									}
								],
								"internalType": "struct JBCurrencyAmount[]",
								"name": "payoutLimits",
								"type": "tuple[]"
							},
							{
								"components": [
									{
										"internalType": "uint224",
										"name": "amount",
										"type": "uint224"
									},
									{
										"internalType": "uint32",
										"name": "currency",
										"type": "uint32"
									}
								],
								"internalType": "struct JBCurrencyAmount[]",
								"name": "surplusAllowances",
								"type": "tuple[]"
							}
						],
						"internalType": "struct JBFundAccessLimitGroup[]",
						"name": "fundAccessLimitGroups",
						"type": "tuple[]"
					}
				],
				"indexed": false,
				"internalType": "struct JBRulesetConfig[]",
				"name": "rulesetConfigurations",
				"type": "tuple[]"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "encodedConfigurationHash",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "caller",
				"type": "address"
			}
		],
		"name": "DeployRevnet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "revnetId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "encodedConfigurationHash",
				"type": "bytes32"
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
				"indexed": false,
				"internalType": "struct REVSuckerDeploymentConfig",
				"name": "suckerDeploymentConfiguration",
				"type": "tuple"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "caller",
				"type": "address"
			}
		],
		"name": "DeploySuckers",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "revnetId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newSplitOperator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "caller",
				"type": "address"
			}
		],
		"name": "ReplaceSplitOperator",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "revnetId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "additionalOperator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "permissionIds",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "caller",
				"type": "address"
			}
		],
		"name": "SetAdditionalOperator",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "revnetId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "cashOutDelay",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "caller",
				"type": "address"
			}
		],
		"name": "SetCashOutDelay",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "revnetId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "stageId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "caller",
				"type": "address"
			}
		],
		"name": "StoreAutoIssuanceAmount",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "x",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "y",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "denominator",
				"type": "uint256"
			}
		],
		"name": "PRBMath_MulDiv_Overflow",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "REVDeployer_AutoIssuanceBeneficiaryZeroAddress",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "cashOutDelay",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "blockTimestamp",
				"type": "uint256"
			}
		],
		"name": "REVDeployer_CashOutDelayNotFinished",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "cashOutTaxRate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxCashOutTaxRate",
				"type": "uint256"
			}
		],
		"name": "REVDeployer_CashOutsCantBeTurnedOffCompletely",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "terminal",
				"type": "address"
			}
		],
		"name": "REVDeployer_LoanSourceDoesntMatchTerminalConfigurations",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "REVDeployer_MustHaveSplits",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "REVDeployer_NothingToAutoIssue",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "REVDeployer_RulesetDoesNotAllowDeployingSuckers",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "stageId",
				"type": "uint256"
			}
		],
		"name": "REVDeployer_StageNotStarted",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "REVDeployer_StageTimesMustIncrease",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "REVDeployer_StagesRequired",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "revnetId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "caller",
				"type": "address"
			}
		],
		"name": "REVDeployer_Unauthorized",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "currentAllowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "requestedDecrease",
				"type": "uint256"
			}
		],
		"name": "SafeERC20FailedDecreaseAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "SafeERC20FailedOperation",
		"type": "error"
	}
];

// Common function to build sucker deployment configuration
const buildSuckerDeploymentConfigurations = (chainId, chainIds) => {
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
    '84532-421614': '0xc295a8926f1ed0a6e3b6cbdb1d28b9d6b388c8a7'
  };

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

  return deployerConfigurations;
};

// Remove the duplicated functions and keep only the specific deployment functions
const tx_deploy_project = async (name, symbol, owner, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses, chainIds, salt) => {
  const projectUri = "ipfs://QmaJzQjaFKxU2LLyqPTpZoGU47owQcmmvVCP1p4YqeuMUy";
  const contractUri = "";
  const allowedPost = { hook: "0x0000000000000000000000000000000000000000", category: 0, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses};
  
  const buildDeploymentData = async (chainId) => {
    const accountingContextToAccept = { token:"0x000000000000000000000000000000000000EEEe", decimals: 18, currency: 61166 };
    const terminal = terminalContract(chainId);
    const terminalConfiguration = { terminal, accountingContextsToAccept: [accountingContextToAccept] };

    const suckerDeploymentConfigurations = buildSuckerDeploymentConfigurations(chainId, chainIds);
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
      [suckerDeploymentConfigurations, salt],
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
    const terminalConfiguration = { terminal, accountingContextsToAccept: [accountingContextToAccept], dataHook: "0x0000000000000000000000000000000000000000", hookToConfigure: "0x0000000000000000000000000000000000000000" };
    
    const baseCurrency = 1;
	const stage1StartsAtOrAfter = Math.floor(Date.now() / 1000) + (6 * 60); // Start 6 minutes from now
    const autoMintStage1 = stage1AutomintTokenAmount == 0 ? [] : [{ chainId: Number(chainId), count: stage1AutomintTokenAmount, beneficiary: owner}];
    const ownerSplit = { percent: 1000000000, projectId: 0, beneficiary: owner, preferAddToBalance: false, lockedUntil: 0, hook: "0x0000000000000000000000000000000000000000" };
    const stageConfiguration1 = { startsAtOrAfter: stage1StartsAtOrAfter, splitPercent: stage1SplitPercent, initialIssuance: stage1InitialIssuanceAmount, issuanceCutFrequency: stage1PriceIncreaseFrequency, issuanceCutPercent: stage1PriceIncreasePercent, cashOutTaxRate: stage1CashOutTaxRate, autoIssuances: autoMintStage1, splits: [ownerSplit], extraMetadata: "0x0000" };
    
    const stageConfigurations = [stageConfiguration1];
    if (stage2StartsAtOrAfter != 0) {
      const autoMintStage2 = stage2AutomintTokenAmount == 0 ? [] : [{ chainId: Number(chainId), count: stage2AutomintTokenAmount, beneficiary: owner}];
      stageConfigurations.push({startsAtOrAfter: stage2StartsAtOrAfter, splitPercent: stage2SplitPercent, initialIssuance: stage2InitialIssuanceAmount, issuanceCutFrequency: stage2PriceIncreaseFrequency, issuanceCutPercent: stage2PriceIncreasePercent, cashOutTaxRate: stage2CashOutTaxRate, autoIssuances: autoMintStage2, splits: [], extraMetadata: "0x0000"}); 
    }
    if (stage3StartsAtOrAfter != 0) {
      const autoMintStage3 = stage3AutomintTokenAmount == 0 ? [] : [{ chainId: Number(chainId), count: stage3AutomintTokenAmount, beneficiary: owner}];
      stageConfigurations.push({startsAtOrAfter: stage3StartsAtOrAfter, splitPercent: stage3SplitPercent, initialIssuance: stage3InitialIssuanceAmount, issuanceCutFrequency: stage3PriceIncreaseFrequency, issuanceCutPercent: stage3PriceIncreasePercent, cashOutTaxRate: stage3CashOutTaxRate, autoIssuances: autoMintStage3, splits: [], extraMetadata: "0x0000" }); 
    }
    
    const description = { name, ticker: symbol, uri: projectUri, salt };
    const loanSource = { token: "0x000000000000000000000000000000000000EEEe", terminal };
    const revnetConfiguration = { description, baseCurrency, splitOperator: owner, stageConfigurations, loanSources: [loanSource], loans, allowCrosschainSuckerExtension: true };
    const buybackPoolConfiguration = { token: "0x000000000000000000000000000000000000EEEe", fee: 10000, twapWindow: 2 * 24 * 60 * 60 };
    const buybackHookConfiguration = { dataHook: buyHookRegistryContract(chainId), hookToConfigure: buyHookContract(chainId), poolConfigurations: [buybackPoolConfiguration]};
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
    const hookConfiguration = {baseline721HookConfiguration, salt, splitOperatorCanAdjustTiers: true, splitOperatorCanUpdateMetadata: true, splitOperatorCanMint: true, splitOperatorCanIncreaseDiscountPercent: true};
    const suckerDeploymentConfigurations = buildSuckerDeploymentConfigurations(chainId, chainIds);
    
    return [0, revnetConfiguration, [terminalConfiguration], buybackHookConfiguration, {deployerConfigurations: suckerDeploymentConfigurations, salt}, hookConfiguration, [allowedPost]];
  };

  const receipt = await handleDeployment(
    chainIds,
    buildDeploymentData,
    revnetDeployerContract,
    revnetDeployerContractABI,
    "deployWith721sFor"
  );

  console.log({ receipt });


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
