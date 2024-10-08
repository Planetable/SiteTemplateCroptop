const croptopDeployerContract = (chainId) => {
  switch (chainId) {
    case 11155111:
      return "0x1Fd03a75AaC42E952Bf46C230Dd2dc485b3d422A";
    case 11155420:
      return "0x1Fd03a75AaC42E952Bf46C230Dd2dc485b3d422A";
    case 84532:
      return "0x1Fd03a75AaC42E952Bf46C230Dd2dc485b3d422A";
    case 421614:
      return "0x1Fd03a75AaC42E952Bf46C230Dd2dc485b3d422A";
  }
}

const revnetDeployerContract = (chainId) => {
  switch (chainId) {
    case 11155111:
      return "0x25bC5D5A708c2E426eF3a5196cc18dE6b2d5A3d1";
    case 11155420:
      return "0x25bC5D5A708c2E426eF3a5196cc18dE6b2d5A3d1";
    case 84532:
      return "0x25bC5D5A708c2E426eF3a5196cc18dE6b2d5A3d1";
    case 421614:
      return "0x25bC5D5A708c2E426eF3a5196cc18dE6b2d5A3d1";
  }
}

const terminalContract = (chainId) => {
  switch (chainId) {
    case 11155111:
      return "0x4DeF0AA5B9CA095d11705284221b2878731ab4EF";
    case 11155420:
      return "0x4DeF0AA5B9CA095d11705284221b2878731ab4EF";
    case 84532:
      return "0x4DeF0AA5B9CA095d11705284221b2878731ab4EF";
    case 421614:
      return "0x4DeF0AA5B9CA095d11705284221b2878731ab4EF";
  }
}

const loansContract = (chainId) => {
  switch (chainId) {
    case 11155111:
      return "0xAd324D9F65F129e260Ae9F702B4bD57B9B0aE8F1";
    case 11155420:
      return "0xAd324D9F65F129e260Ae9F702B4bD57B9B0aE8F1";
    case 84532:
      return "0xAd324D9F65F129e260Ae9F702B4bD57B9B0aE8F1";
    case 421614:
      return "0xAd324D9F65F129e260Ae9F702B4bD57B9B0aE8F1";
  }
}


const croptopDeployerContractABI = [
		{
			"type": "constructor",
			"inputs": [
				{
					"name": "controller",
					"type": "address",
					"internalType": "contract IJBController"
				},
				{
					"name": "deployer",
					"type": "address",
					"internalType": "contract IJB721TiersHookProjectDeployer"
				},
				{
					"name": "publisher",
					"type": "address",
					"internalType": "contract ICTPublisher"
				}
			],
			"stateMutability": "nonpayable"
		},
		{
			"type": "function",
			"name": "CONTROLLER",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "contract IJBController"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "DEPLOYER",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "contract IJB721TiersHookProjectDeployer"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "PUBLISHER",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "contract ICTPublisher"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "deployProjectFor",
			"inputs": [
				{
					"name": "owner",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "terminalConfigurations",
					"type": "tuple[]",
					"internalType": "struct JBTerminalConfig[]",
					"components": [
						{
							"name": "terminal",
							"type": "address",
							"internalType": "contract IJBTerminal"
						},
						{
							"name": "accountingContextsToAccept",
							"type": "tuple[]",
							"internalType": "struct JBAccountingContext[]",
							"components": [
								{
									"name": "token",
									"type": "address",
									"internalType": "address"
								},
								{
									"name": "decimals",
									"type": "uint8",
									"internalType": "uint8"
								},
								{
									"name": "currency",
									"type": "uint32",
									"internalType": "uint32"
								}
							]
						}
					]
				},
				{
					"name": "projectUri",
					"type": "string",
					"internalType": "string"
				},
				{
					"name": "allowedPosts",
					"type": "tuple[]",
					"internalType": "struct CTDeployerAllowedPost[]",
					"components": [
						{
							"name": "category",
							"type": "uint24",
							"internalType": "uint24"
						},
						{
							"name": "minimumPrice",
							"type": "uint104",
							"internalType": "uint104"
						},
						{
							"name": "minimumTotalSupply",
							"type": "uint32",
							"internalType": "uint32"
						},
						{
							"name": "maximumTotalSupply",
							"type": "uint32",
							"internalType": "uint32"
						},
						{
							"name": "allowedAddresses",
							"type": "address[]",
							"internalType": "address[]"
						}
					]
				},
				{
					"name": "contractUri",
					"type": "string",
					"internalType": "string"
				},
				{
					"name": "name",
					"type": "string",
					"internalType": "string"
				},
				{
					"name": "symbol",
					"type": "string",
					"internalType": "string"
				}
			],
			"outputs": [
				{
					"name": "projectId",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "hook",
					"type": "address",
					"internalType": "contract IJB721TiersHook"
				}
			],
			"stateMutability": "nonpayable"
		},
		{
			"type": "function",
			"name": "onERC721Received",
			"inputs": [
				{
					"name": "operator",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "from",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "tokenId",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "data",
					"type": "bytes",
					"internalType": "bytes"
				}
			],
			"outputs": [
				{
					"name": "",
					"type": "bytes4",
					"internalType": "bytes4"
				}
			],
			"stateMutability": "view"
		}
	];

const revnetDeployerContractABI = [
		{
			"type": "constructor",
			"inputs": [
				{
					"name": "controller",
					"type": "address",
					"internalType": "contract IJBController"
				},
				{
					"name": "suckerRegistry",
					"type": "address",
					"internalType": "contract IJBSuckerRegistry"
				},
				{
					"name": "feeRevnetId",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "hookDeployer",
					"type": "address",
					"internalType": "contract IJB721TiersHookDeployer"
				},
				{
					"name": "publisher",
					"type": "address",
					"internalType": "contract CTPublisher"
				}
			],
			"stateMutability": "nonpayable"
		},
		{
			"type": "function",
			"name": "CASH_OUT_DELAY",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "CONTROLLER",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "contract IJBController"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "DIRECTORY",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "contract IJBDirectory"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "FEE",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "FEE_REVNET_ID",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "HOOK_DEPLOYER",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "contract IJB721TiersHookDeployer"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "PERMISSIONS",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "contract IJBPermissions"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "PROJECTS",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "contract IJBProjects"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "PUBLISHER",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "contract CTPublisher"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "SUCKER_REGISTRY",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "contract IJBSuckerRegistry"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "afterRedeemRecordedWith",
			"inputs": [
				{
					"name": "context",
					"type": "tuple",
					"internalType": "struct JBAfterRedeemRecordedContext",
					"components": [
						{
							"name": "holder",
							"type": "address",
							"internalType": "address"
						},
						{
							"name": "projectId",
							"type": "uint256",
							"internalType": "uint256"
						},
						{
							"name": "rulesetId",
							"type": "uint256",
							"internalType": "uint256"
						},
						{
							"name": "redeemCount",
							"type": "uint256",
							"internalType": "uint256"
						},
						{
							"name": "reclaimedAmount",
							"type": "tuple",
							"internalType": "struct JBTokenAmount",
							"components": [
								{
									"name": "token",
									"type": "address",
									"internalType": "address"
								},
								{
									"name": "decimals",
									"type": "uint8",
									"internalType": "uint8"
								},
								{
									"name": "currency",
									"type": "uint32",
									"internalType": "uint32"
								},
								{
									"name": "value",
									"type": "uint256",
									"internalType": "uint256"
								}
							]
						},
						{
							"name": "forwardedAmount",
							"type": "tuple",
							"internalType": "struct JBTokenAmount",
							"components": [
								{
									"name": "token",
									"type": "address",
									"internalType": "address"
								},
								{
									"name": "decimals",
									"type": "uint8",
									"internalType": "uint8"
								},
								{
									"name": "currency",
									"type": "uint32",
									"internalType": "uint32"
								},
								{
									"name": "value",
									"type": "uint256",
									"internalType": "uint256"
								}
							]
						},
						{
							"name": "redemptionRate",
							"type": "uint256",
							"internalType": "uint256"
						},
						{
							"name": "beneficiary",
							"type": "address",
							"internalType": "address payable"
						},
						{
							"name": "hookMetadata",
							"type": "bytes",
							"internalType": "bytes"
						},
						{
							"name": "redeemerMetadata",
							"type": "bytes",
							"internalType": "bytes"
						}
					]
				}
			],
			"outputs": [],
			"stateMutability": "payable"
		},
		{
			"type": "function",
			"name": "amountToAutoMint",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "stageId",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "beneficiary",
					"type": "address",
					"internalType": "address"
				}
			],
			"outputs": [
				{
					"name": "",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "autoMintFor",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "stageId",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "beneficiary",
					"type": "address",
					"internalType": "address"
				}
			],
			"outputs": [],
			"stateMutability": "nonpayable"
		},
		{
			"type": "function",
			"name": "beforePayRecordedWith",
			"inputs": [
				{
					"name": "context",
					"type": "tuple",
					"internalType": "struct JBBeforePayRecordedContext",
					"components": [
						{
							"name": "terminal",
							"type": "address",
							"internalType": "address"
						},
						{
							"name": "payer",
							"type": "address",
							"internalType": "address"
						},
						{
							"name": "amount",
							"type": "tuple",
							"internalType": "struct JBTokenAmount",
							"components": [
								{
									"name": "token",
									"type": "address",
									"internalType": "address"
								},
								{
									"name": "decimals",
									"type": "uint8",
									"internalType": "uint8"
								},
								{
									"name": "currency",
									"type": "uint32",
									"internalType": "uint32"
								},
								{
									"name": "value",
									"type": "uint256",
									"internalType": "uint256"
								}
							]
						},
						{
							"name": "projectId",
							"type": "uint256",
							"internalType": "uint256"
						},
						{
							"name": "rulesetId",
							"type": "uint256",
							"internalType": "uint256"
						},
						{
							"name": "beneficiary",
							"type": "address",
							"internalType": "address"
						},
						{
							"name": "weight",
							"type": "uint256",
							"internalType": "uint256"
						},
						{
							"name": "reservedPercent",
							"type": "uint256",
							"internalType": "uint256"
						},
						{
							"name": "metadata",
							"type": "bytes",
							"internalType": "bytes"
						}
					]
				}
			],
			"outputs": [
				{
					"name": "weight",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "hookSpecifications",
					"type": "tuple[]",
					"internalType": "struct JBPayHookSpecification[]",
					"components": [
						{
							"name": "hook",
							"type": "address",
							"internalType": "contract IJBPayHook"
						},
						{
							"name": "amount",
							"type": "uint256",
							"internalType": "uint256"
						},
						{
							"name": "metadata",
							"type": "bytes",
							"internalType": "bytes"
						}
					]
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "beforeRedeemRecordedWith",
			"inputs": [
				{
					"name": "context",
					"type": "tuple",
					"internalType": "struct JBBeforeRedeemRecordedContext",
					"components": [
						{
							"name": "terminal",
							"type": "address",
							"internalType": "address"
						},
						{
							"name": "holder",
							"type": "address",
							"internalType": "address"
						},
						{
							"name": "projectId",
							"type": "uint256",
							"internalType": "uint256"
						},
						{
							"name": "rulesetId",
							"type": "uint256",
							"internalType": "uint256"
						},
						{
							"name": "redeemCount",
							"type": "uint256",
							"internalType": "uint256"
						},
						{
							"name": "totalSupply",
							"type": "uint256",
							"internalType": "uint256"
						},
						{
							"name": "surplus",
							"type": "tuple",
							"internalType": "struct JBTokenAmount",
							"components": [
								{
									"name": "token",
									"type": "address",
									"internalType": "address"
								},
								{
									"name": "decimals",
									"type": "uint8",
									"internalType": "uint8"
								},
								{
									"name": "currency",
									"type": "uint32",
									"internalType": "uint32"
								},
								{
									"name": "value",
									"type": "uint256",
									"internalType": "uint256"
								}
							]
						},
						{
							"name": "useTotalSurplus",
							"type": "bool",
							"internalType": "bool"
						},
						{
							"name": "redemptionRate",
							"type": "uint256",
							"internalType": "uint256"
						},
						{
							"name": "metadata",
							"type": "bytes",
							"internalType": "bytes"
						}
					]
				}
			],
			"outputs": [
				{
					"name": "redemptionRate",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "redeemCount",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "totalSupply",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "hookSpecifications",
					"type": "tuple[]",
					"internalType": "struct JBRedeemHookSpecification[]",
					"components": [
						{
							"name": "hook",
							"type": "address",
							"internalType": "contract IJBRedeemHook"
						},
						{
							"name": "amount",
							"type": "uint256",
							"internalType": "uint256"
						},
						{
							"name": "metadata",
							"type": "bytes",
							"internalType": "bytes"
						}
					]
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "buybackHookOf",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"outputs": [
				{
					"name": "buybackHook",
					"type": "address",
					"internalType": "contract IJBRulesetDataHook"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "cashOutDelayOf",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"outputs": [
				{
					"name": "cashOutDelay",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "deployFor",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "configuration",
					"type": "tuple",
					"internalType": "struct REVConfig",
					"components": [
						{
							"name": "description",
							"type": "tuple",
							"internalType": "struct REVDescription",
							"components": [
								{
									"name": "name",
									"type": "string",
									"internalType": "string"
								},
								{
									"name": "ticker",
									"type": "string",
									"internalType": "string"
								},
								{
									"name": "uri",
									"type": "string",
									"internalType": "string"
								},
								{
									"name": "salt",
									"type": "bytes32",
									"internalType": "bytes32"
								}
							]
						},
						{
							"name": "baseCurrency",
							"type": "uint32",
							"internalType": "uint32"
						},
						{
							"name": "splitOperator",
							"type": "address",
							"internalType": "address"
						},
						{
							"name": "stageConfigurations",
							"type": "tuple[]",
							"internalType": "struct REVStageConfig[]",
							"components": [
								{
									"name": "startsAtOrAfter",
									"type": "uint40",
									"internalType": "uint40"
								},
								{
									"name": "autoMints",
									"type": "tuple[]",
									"internalType": "struct REVAutoMint[]",
									"components": [
										{
											"name": "chainId",
											"type": "uint32",
											"internalType": "uint32"
										},
										{
											"name": "count",
											"type": "uint104",
											"internalType": "uint104"
										},
										{
											"name": "beneficiary",
											"type": "address",
											"internalType": "address"
										}
									]
								},
								{
									"name": "splitPercent",
									"type": "uint16",
									"internalType": "uint16"
								},
								{
									"name": "initialIssuance",
									"type": "uint112",
									"internalType": "uint112"
								},
								{
									"name": "issuanceDecayFrequency",
									"type": "uint32",
									"internalType": "uint32"
								},
								{
									"name": "issuanceDecayPercent",
									"type": "uint32",
									"internalType": "uint32"
								},
								{
									"name": "cashOutTaxRate",
									"type": "uint16",
									"internalType": "uint16"
								},
								{
									"name": "extraMetadata",
									"type": "uint16",
									"internalType": "uint16"
								}
							]
						},
						{
							"name": "loanSources",
							"type": "tuple[]",
							"internalType": "struct REVLoanSource[]",
							"components": [
								{
									"name": "token",
									"type": "address",
									"internalType": "address"
								},
								{
									"name": "terminal",
									"type": "address",
									"internalType": "contract IJBPayoutTerminal"
								}
							]
						},
						{
							"name": "loans",
							"type": "address",
							"internalType": "address"
						},
						{
							"name": "allowCrosschainSuckerExtension",
							"type": "bool",
							"internalType": "bool"
						}
					]
				},
				{
					"name": "terminalConfigurations",
					"type": "tuple[]",
					"internalType": "struct JBTerminalConfig[]",
					"components": [
						{
							"name": "terminal",
							"type": "address",
							"internalType": "contract IJBTerminal"
						},
						{
							"name": "accountingContextsToAccept",
							"type": "tuple[]",
							"internalType": "struct JBAccountingContext[]",
							"components": [
								{
									"name": "token",
									"type": "address",
									"internalType": "address"
								},
								{
									"name": "decimals",
									"type": "uint8",
									"internalType": "uint8"
								},
								{
									"name": "currency",
									"type": "uint32",
									"internalType": "uint32"
								}
							]
						}
					]
				},
				{
					"name": "buybackHookConfiguration",
					"type": "tuple",
					"internalType": "struct REVBuybackHookConfig",
					"components": [
						{
							"name": "hook",
							"type": "address",
							"internalType": "contract IJBBuybackHook"
						},
						{
							"name": "poolConfigurations",
							"type": "tuple[]",
							"internalType": "struct REVBuybackPoolConfig[]",
							"components": [
								{
									"name": "token",
									"type": "address",
									"internalType": "address"
								},
								{
									"name": "fee",
									"type": "uint24",
									"internalType": "uint24"
								},
								{
									"name": "twapWindow",
									"type": "uint32",
									"internalType": "uint32"
								},
								{
									"name": "twapSlippageTolerance",
									"type": "uint32",
									"internalType": "uint32"
								}
							]
						}
					]
				},
				{
					"name": "suckerDeploymentConfiguration",
					"type": "tuple",
					"internalType": "struct REVSuckerDeploymentConfig",
					"components": [
						{
							"name": "deployerConfigurations",
							"type": "tuple[]",
							"internalType": "struct JBSuckerDeployerConfig[]",
							"components": [
								{
									"name": "deployer",
									"type": "address",
									"internalType": "contract IJBSuckerDeployer"
								},
								{
									"name": "mappings",
									"type": "tuple[]",
									"internalType": "struct JBTokenMapping[]",
									"components": [
										{
											"name": "localToken",
											"type": "address",
											"internalType": "address"
										},
										{
											"name": "minGas",
											"type": "uint32",
											"internalType": "uint32"
										},
										{
											"name": "remoteToken",
											"type": "address",
											"internalType": "address"
										},
										{
											"name": "minBridgeAmount",
											"type": "uint256",
											"internalType": "uint256"
										}
									]
								}
							]
						},
						{
							"name": "salt",
							"type": "bytes32",
							"internalType": "bytes32"
						}
					]
				}
			],
			"outputs": [
				{
					"name": "",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"stateMutability": "nonpayable"
		},
		{
			"type": "function",
			"name": "deploySuckersFor",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "encodedConfiguration",
					"type": "bytes",
					"internalType": "bytes"
				},
				{
					"name": "suckerDeploymentConfiguration",
					"type": "tuple",
					"internalType": "struct REVSuckerDeploymentConfig",
					"components": [
						{
							"name": "deployerConfigurations",
							"type": "tuple[]",
							"internalType": "struct JBSuckerDeployerConfig[]",
							"components": [
								{
									"name": "deployer",
									"type": "address",
									"internalType": "contract IJBSuckerDeployer"
								},
								{
									"name": "mappings",
									"type": "tuple[]",
									"internalType": "struct JBTokenMapping[]",
									"components": [
										{
											"name": "localToken",
											"type": "address",
											"internalType": "address"
										},
										{
											"name": "minGas",
											"type": "uint32",
											"internalType": "uint32"
										},
										{
											"name": "remoteToken",
											"type": "address",
											"internalType": "address"
										},
										{
											"name": "minBridgeAmount",
											"type": "uint256",
											"internalType": "uint256"
										}
									]
								}
							]
						},
						{
							"name": "salt",
							"type": "bytes32",
							"internalType": "bytes32"
						}
					]
				}
			],
			"outputs": [
				{
					"name": "suckers",
					"type": "address[]",
					"internalType": "address[]"
				}
			],
			"stateMutability": "nonpayable"
		},
		{
			"type": "function",
			"name": "deployWith721sFor",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "configuration",
					"type": "tuple",
					"internalType": "struct REVConfig",
					"components": [
						{
							"name": "description",
							"type": "tuple",
							"internalType": "struct REVDescription",
							"components": [
								{
									"name": "name",
									"type": "string",
									"internalType": "string"
								},
								{
									"name": "ticker",
									"type": "string",
									"internalType": "string"
								},
								{
									"name": "uri",
									"type": "string",
									"internalType": "string"
								},
								{
									"name": "salt",
									"type": "bytes32",
									"internalType": "bytes32"
								}
							]
						},
						{
							"name": "baseCurrency",
							"type": "uint32",
							"internalType": "uint32"
						},
						{
							"name": "splitOperator",
							"type": "address",
							"internalType": "address"
						},
						{
							"name": "stageConfigurations",
							"type": "tuple[]",
							"internalType": "struct REVStageConfig[]",
							"components": [
								{
									"name": "startsAtOrAfter",
									"type": "uint40",
									"internalType": "uint40"
								},
								{
									"name": "autoMints",
									"type": "tuple[]",
									"internalType": "struct REVAutoMint[]",
									"components": [
										{
											"name": "chainId",
											"type": "uint32",
											"internalType": "uint32"
										},
										{
											"name": "count",
											"type": "uint104",
											"internalType": "uint104"
										},
										{
											"name": "beneficiary",
											"type": "address",
											"internalType": "address"
										}
									]
								},
								{
									"name": "splitPercent",
									"type": "uint16",
									"internalType": "uint16"
								},
								{
									"name": "initialIssuance",
									"type": "uint112",
									"internalType": "uint112"
								},
								{
									"name": "issuanceDecayFrequency",
									"type": "uint32",
									"internalType": "uint32"
								},
								{
									"name": "issuanceDecayPercent",
									"type": "uint32",
									"internalType": "uint32"
								},
								{
									"name": "cashOutTaxRate",
									"type": "uint16",
									"internalType": "uint16"
								},
								{
									"name": "extraMetadata",
									"type": "uint16",
									"internalType": "uint16"
								}
							]
						},
						{
							"name": "loanSources",
							"type": "tuple[]",
							"internalType": "struct REVLoanSource[]",
							"components": [
								{
									"name": "token",
									"type": "address",
									"internalType": "address"
								},
								{
									"name": "terminal",
									"type": "address",
									"internalType": "contract IJBPayoutTerminal"
								}
							]
						},
						{
							"name": "loans",
							"type": "address",
							"internalType": "address"
						},
						{
							"name": "allowCrosschainSuckerExtension",
							"type": "bool",
							"internalType": "bool"
						}
					]
				},
				{
					"name": "terminalConfigurations",
					"type": "tuple[]",
					"internalType": "struct JBTerminalConfig[]",
					"components": [
						{
							"name": "terminal",
							"type": "address",
							"internalType": "contract IJBTerminal"
						},
						{
							"name": "accountingContextsToAccept",
							"type": "tuple[]",
							"internalType": "struct JBAccountingContext[]",
							"components": [
								{
									"name": "token",
									"type": "address",
									"internalType": "address"
								},
								{
									"name": "decimals",
									"type": "uint8",
									"internalType": "uint8"
								},
								{
									"name": "currency",
									"type": "uint32",
									"internalType": "uint32"
								}
							]
						}
					]
				},
				{
					"name": "buybackHookConfiguration",
					"type": "tuple",
					"internalType": "struct REVBuybackHookConfig",
					"components": [
						{
							"name": "hook",
							"type": "address",
							"internalType": "contract IJBBuybackHook"
						},
						{
							"name": "poolConfigurations",
							"type": "tuple[]",
							"internalType": "struct REVBuybackPoolConfig[]",
							"components": [
								{
									"name": "token",
									"type": "address",
									"internalType": "address"
								},
								{
									"name": "fee",
									"type": "uint24",
									"internalType": "uint24"
								},
								{
									"name": "twapWindow",
									"type": "uint32",
									"internalType": "uint32"
								},
								{
									"name": "twapSlippageTolerance",
									"type": "uint32",
									"internalType": "uint32"
								}
							]
						}
					]
				},
				{
					"name": "suckerDeploymentConfiguration",
					"type": "tuple",
					"internalType": "struct REVSuckerDeploymentConfig",
					"components": [
						{
							"name": "deployerConfigurations",
							"type": "tuple[]",
							"internalType": "struct JBSuckerDeployerConfig[]",
							"components": [
								{
									"name": "deployer",
									"type": "address",
									"internalType": "contract IJBSuckerDeployer"
								},
								{
									"name": "mappings",
									"type": "tuple[]",
									"internalType": "struct JBTokenMapping[]",
									"components": [
										{
											"name": "localToken",
											"type": "address",
											"internalType": "address"
										},
										{
											"name": "minGas",
											"type": "uint32",
											"internalType": "uint32"
										},
										{
											"name": "remoteToken",
											"type": "address",
											"internalType": "address"
										},
										{
											"name": "minBridgeAmount",
											"type": "uint256",
											"internalType": "uint256"
										}
									]
								}
							]
						},
						{
							"name": "salt",
							"type": "bytes32",
							"internalType": "bytes32"
						}
					]
				},
				{
					"name": "tiered721HookConfiguration",
					"type": "tuple",
					"internalType": "struct REVDeploy721TiersHookConfig",
					"components": [
						{
							"name": "baseline721HookConfiguration",
							"type": "tuple",
							"internalType": "struct JBDeploy721TiersHookConfig",
							"components": [
								{
									"name": "name",
									"type": "string",
									"internalType": "string"
								},
								{
									"name": "symbol",
									"type": "string",
									"internalType": "string"
								},
								{
									"name": "baseUri",
									"type": "string",
									"internalType": "string"
								},
								{
									"name": "tokenUriResolver",
									"type": "address",
									"internalType": "contract IJB721TokenUriResolver"
								},
								{
									"name": "contractUri",
									"type": "string",
									"internalType": "string"
								},
								{
									"name": "tiersConfig",
									"type": "tuple",
									"internalType": "struct JB721InitTiersConfig",
									"components": [
										{
											"name": "tiers",
											"type": "tuple[]",
											"internalType": "struct JB721TierConfig[]",
											"components": [
												{
													"name": "price",
													"type": "uint104",
													"internalType": "uint104"
												},
												{
													"name": "initialSupply",
													"type": "uint32",
													"internalType": "uint32"
												},
												{
													"name": "votingUnits",
													"type": "uint32",
													"internalType": "uint32"
												},
												{
													"name": "reserveFrequency",
													"type": "uint16",
													"internalType": "uint16"
												},
												{
													"name": "reserveBeneficiary",
													"type": "address",
													"internalType": "address"
												},
												{
													"name": "encodedIPFSUri",
													"type": "bytes32",
													"internalType": "bytes32"
												},
												{
													"name": "category",
													"type": "uint24",
													"internalType": "uint24"
												},
												{
													"name": "discountPercent",
													"type": "uint8",
													"internalType": "uint8"
												},
												{
													"name": "allowOwnerMint",
													"type": "bool",
													"internalType": "bool"
												},
												{
													"name": "useReserveBeneficiaryAsDefault",
													"type": "bool",
													"internalType": "bool"
												},
												{
													"name": "transfersPausable",
													"type": "bool",
													"internalType": "bool"
												},
												{
													"name": "useVotingUnits",
													"type": "bool",
													"internalType": "bool"
												},
												{
													"name": "cannotBeRemoved",
													"type": "bool",
													"internalType": "bool"
												},
												{
													"name": "cannotIncreaseDiscountPercent",
													"type": "bool",
													"internalType": "bool"
												}
											]
										},
										{
											"name": "currency",
											"type": "uint32",
											"internalType": "uint32"
										},
										{
											"name": "decimals",
											"type": "uint8",
											"internalType": "uint8"
										},
										{
											"name": "prices",
											"type": "address",
											"internalType": "contract IJBPrices"
										}
									]
								},
								{
									"name": "reserveBeneficiary",
									"type": "address",
									"internalType": "address"
								},
								{
									"name": "flags",
									"type": "tuple",
									"internalType": "struct JB721TiersHookFlags",
									"components": [
										{
											"name": "noNewTiersWithReserves",
											"type": "bool",
											"internalType": "bool"
										},
										{
											"name": "noNewTiersWithVotes",
											"type": "bool",
											"internalType": "bool"
										},
										{
											"name": "noNewTiersWithOwnerMinting",
											"type": "bool",
											"internalType": "bool"
										},
										{
											"name": "preventOverspending",
											"type": "bool",
											"internalType": "bool"
										}
									]
								}
							]
						},
						{
							"name": "splitOperatorCanAdjustTiers",
							"type": "bool",
							"internalType": "bool"
						},
						{
							"name": "splitOperatorCanUpdateMetadata",
							"type": "bool",
							"internalType": "bool"
						},
						{
							"name": "splitOperatorCanMint",
							"type": "bool",
							"internalType": "bool"
						},
						{
							"name": "splitOperatorCanIncreaseDiscountPercent",
							"type": "bool",
							"internalType": "bool"
						}
					]
				},
				{
					"name": "allowedPosts",
					"type": "tuple[]",
					"internalType": "struct REVCroptopAllowedPost[]",
					"components": [
						{
							"name": "category",
							"type": "uint24",
							"internalType": "uint24"
						},
						{
							"name": "minimumPrice",
							"type": "uint104",
							"internalType": "uint104"
						},
						{
							"name": "minimumTotalSupply",
							"type": "uint32",
							"internalType": "uint32"
						},
						{
							"name": "maximumTotalSupply",
							"type": "uint32",
							"internalType": "uint32"
						},
						{
							"name": "allowedAddresses",
							"type": "address[]",
							"internalType": "address[]"
						}
					]
				}
			],
			"outputs": [
				{
					"name": "",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "hook",
					"type": "address",
					"internalType": "contract IJB721TiersHook"
				}
			],
			"stateMutability": "nonpayable"
		},
		{
			"type": "function",
			"name": "hasMintPermissionFor",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "addr",
					"type": "address",
					"internalType": "address"
				}
			],
			"outputs": [
				{
					"name": "",
					"type": "bool",
					"internalType": "bool"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "isSplitOperatorOf",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "addr",
					"type": "address",
					"internalType": "address"
				}
			],
			"outputs": [
				{
					"name": "",
					"type": "bool",
					"internalType": "bool"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "loansOf",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"outputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "address"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "onERC721Received",
			"inputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "",
					"type": "address",
					"internalType": "address"
				},
				{
					"name": "",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "",
					"type": "bytes",
					"internalType": "bytes"
				}
			],
			"outputs": [
				{
					"name": "",
					"type": "bytes4",
					"internalType": "bytes4"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "setSplitOperatorOf",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "newSplitOperator",
					"type": "address",
					"internalType": "address"
				}
			],
			"outputs": [],
			"stateMutability": "nonpayable"
		},
		{
			"type": "function",
			"name": "supportsInterface",
			"inputs": [
				{
					"name": "interfaceId",
					"type": "bytes4",
					"internalType": "bytes4"
				}
			],
			"outputs": [
				{
					"name": "",
					"type": "bool",
					"internalType": "bool"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "tiered721HookOf",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"outputs": [
				{
					"name": "tiered721Hook",
					"type": "address",
					"internalType": "contract IJB721TiersHook"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "unrealizedAutoMintAmountOf",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"outputs": [
				{
					"name": "",
					"type": "uint256",
					"internalType": "uint256"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "event",
			"name": "DeployRevnet",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"indexed": true,
					"internalType": "uint256"
				},
				{
					"name": "configuration",
					"type": "tuple",
					"indexed": false,
					"internalType": "struct REVConfig",
					"components": [
						{
							"name": "description",
							"type": "tuple",
							"internalType": "struct REVDescription",
							"components": [
								{
									"name": "name",
									"type": "string",
									"internalType": "string"
								},
								{
									"name": "ticker",
									"type": "string",
									"internalType": "string"
								},
								{
									"name": "uri",
									"type": "string",
									"internalType": "string"
								},
								{
									"name": "salt",
									"type": "bytes32",
									"internalType": "bytes32"
								}
							]
						},
						{
							"name": "baseCurrency",
							"type": "uint32",
							"internalType": "uint32"
						},
						{
							"name": "splitOperator",
							"type": "address",
							"internalType": "address"
						},
						{
							"name": "stageConfigurations",
							"type": "tuple[]",
							"internalType": "struct REVStageConfig[]",
							"components": [
								{
									"name": "startsAtOrAfter",
									"type": "uint40",
									"internalType": "uint40"
								},
								{
									"name": "autoMints",
									"type": "tuple[]",
									"internalType": "struct REVAutoMint[]",
									"components": [
										{
											"name": "chainId",
											"type": "uint32",
											"internalType": "uint32"
										},
										{
											"name": "count",
											"type": "uint104",
											"internalType": "uint104"
										},
										{
											"name": "beneficiary",
											"type": "address",
											"internalType": "address"
										}
									]
								},
								{
									"name": "splitPercent",
									"type": "uint16",
									"internalType": "uint16"
								},
								{
									"name": "initialIssuance",
									"type": "uint112",
									"internalType": "uint112"
								},
								{
									"name": "issuanceDecayFrequency",
									"type": "uint32",
									"internalType": "uint32"
								},
								{
									"name": "issuanceDecayPercent",
									"type": "uint32",
									"internalType": "uint32"
								},
								{
									"name": "cashOutTaxRate",
									"type": "uint16",
									"internalType": "uint16"
								},
								{
									"name": "extraMetadata",
									"type": "uint16",
									"internalType": "uint16"
								}
							]
						},
						{
							"name": "loanSources",
							"type": "tuple[]",
							"internalType": "struct REVLoanSource[]",
							"components": [
								{
									"name": "token",
									"type": "address",
									"internalType": "address"
								},
								{
									"name": "terminal",
									"type": "address",
									"internalType": "contract IJBPayoutTerminal"
								}
							]
						},
						{
							"name": "loans",
							"type": "address",
							"internalType": "address"
						},
						{
							"name": "allowCrosschainSuckerExtension",
							"type": "bool",
							"internalType": "bool"
						}
					]
				},
				{
					"name": "terminalConfigurations",
					"type": "tuple[]",
					"indexed": false,
					"internalType": "struct JBTerminalConfig[]",
					"components": [
						{
							"name": "terminal",
							"type": "address",
							"internalType": "contract IJBTerminal"
						},
						{
							"name": "accountingContextsToAccept",
							"type": "tuple[]",
							"internalType": "struct JBAccountingContext[]",
							"components": [
								{
									"name": "token",
									"type": "address",
									"internalType": "address"
								},
								{
									"name": "decimals",
									"type": "uint8",
									"internalType": "uint8"
								},
								{
									"name": "currency",
									"type": "uint32",
									"internalType": "uint32"
								}
							]
						}
					]
				},
				{
					"name": "buybackHookConfiguration",
					"type": "tuple",
					"indexed": false,
					"internalType": "struct REVBuybackHookConfig",
					"components": [
						{
							"name": "hook",
							"type": "address",
							"internalType": "contract IJBBuybackHook"
						},
						{
							"name": "poolConfigurations",
							"type": "tuple[]",
							"internalType": "struct REVBuybackPoolConfig[]",
							"components": [
								{
									"name": "token",
									"type": "address",
									"internalType": "address"
								},
								{
									"name": "fee",
									"type": "uint24",
									"internalType": "uint24"
								},
								{
									"name": "twapWindow",
									"type": "uint32",
									"internalType": "uint32"
								},
								{
									"name": "twapSlippageTolerance",
									"type": "uint32",
									"internalType": "uint32"
								}
							]
						}
					]
				},
				{
					"name": "suckerDeploymentConfiguration",
					"type": "tuple",
					"indexed": false,
					"internalType": "struct REVSuckerDeploymentConfig",
					"components": [
						{
							"name": "deployerConfigurations",
							"type": "tuple[]",
							"internalType": "struct JBSuckerDeployerConfig[]",
							"components": [
								{
									"name": "deployer",
									"type": "address",
									"internalType": "contract IJBSuckerDeployer"
								},
								{
									"name": "mappings",
									"type": "tuple[]",
									"internalType": "struct JBTokenMapping[]",
									"components": [
										{
											"name": "localToken",
											"type": "address",
											"internalType": "address"
										},
										{
											"name": "minGas",
											"type": "uint32",
											"internalType": "uint32"
										},
										{
											"name": "remoteToken",
											"type": "address",
											"internalType": "address"
										},
										{
											"name": "minBridgeAmount",
											"type": "uint256",
											"internalType": "uint256"
										}
									]
								}
							]
						},
						{
							"name": "salt",
							"type": "bytes32",
							"internalType": "bytes32"
						}
					]
				},
				{
					"name": "rulesetConfigurations",
					"type": "tuple[]",
					"indexed": false,
					"internalType": "struct JBRulesetConfig[]",
					"components": [
						{
							"name": "mustStartAtOrAfter",
							"type": "uint48",
							"internalType": "uint48"
						},
						{
							"name": "duration",
							"type": "uint32",
							"internalType": "uint32"
						},
						{
							"name": "weight",
							"type": "uint112",
							"internalType": "uint112"
						},
						{
							"name": "decayPercent",
							"type": "uint32",
							"internalType": "uint32"
						},
						{
							"name": "approvalHook",
							"type": "address",
							"internalType": "contract IJBRulesetApprovalHook"
						},
						{
							"name": "metadata",
							"type": "tuple",
							"internalType": "struct JBRulesetMetadata",
							"components": [
								{
									"name": "reservedPercent",
									"type": "uint16",
									"internalType": "uint16"
								},
								{
									"name": "redemptionRate",
									"type": "uint16",
									"internalType": "uint16"
								},
								{
									"name": "baseCurrency",
									"type": "uint32",
									"internalType": "uint32"
								},
								{
									"name": "pausePay",
									"type": "bool",
									"internalType": "bool"
								},
								{
									"name": "pauseCreditTransfers",
									"type": "bool",
									"internalType": "bool"
								},
								{
									"name": "allowOwnerMinting",
									"type": "bool",
									"internalType": "bool"
								},
								{
									"name": "allowSetCustomToken",
									"type": "bool",
									"internalType": "bool"
								},
								{
									"name": "allowTerminalMigration",
									"type": "bool",
									"internalType": "bool"
								},
								{
									"name": "allowSetTerminals",
									"type": "bool",
									"internalType": "bool"
								},
								{
									"name": "allowSetController",
									"type": "bool",
									"internalType": "bool"
								},
								{
									"name": "allowAddAccountingContext",
									"type": "bool",
									"internalType": "bool"
								},
								{
									"name": "allowAddPriceFeed",
									"type": "bool",
									"internalType": "bool"
								},
								{
									"name": "allowCrosschainSuckerExtension",
									"type": "bool",
									"internalType": "bool"
								},
								{
									"name": "ownerMustSendPayouts",
									"type": "bool",
									"internalType": "bool"
								},
								{
									"name": "holdFees",
									"type": "bool",
									"internalType": "bool"
								},
								{
									"name": "useTotalSurplusForRedemptions",
									"type": "bool",
									"internalType": "bool"
								},
								{
									"name": "useDataHookForPay",
									"type": "bool",
									"internalType": "bool"
								},
								{
									"name": "useDataHookForRedeem",
									"type": "bool",
									"internalType": "bool"
								},
								{
									"name": "dataHook",
									"type": "address",
									"internalType": "address"
								},
								{
									"name": "metadata",
									"type": "uint16",
									"internalType": "uint16"
								}
							]
						},
						{
							"name": "splitGroups",
							"type": "tuple[]",
							"internalType": "struct JBSplitGroup[]",
							"components": [
								{
									"name": "groupId",
									"type": "uint256",
									"internalType": "uint256"
								},
								{
									"name": "splits",
									"type": "tuple[]",
									"internalType": "struct JBSplit[]",
									"components": [
										{
											"name": "preferAddToBalance",
											"type": "bool",
											"internalType": "bool"
										},
										{
											"name": "percent",
											"type": "uint32",
											"internalType": "uint32"
										},
										{
											"name": "projectId",
											"type": "uint56",
											"internalType": "uint56"
										},
										{
											"name": "beneficiary",
											"type": "address",
											"internalType": "address payable"
										},
										{
											"name": "lockedUntil",
											"type": "uint48",
											"internalType": "uint48"
										},
										{
											"name": "hook",
											"type": "address",
											"internalType": "contract IJBSplitHook"
										}
									]
								}
							]
						},
						{
							"name": "fundAccessLimitGroups",
							"type": "tuple[]",
							"internalType": "struct JBFundAccessLimitGroup[]",
							"components": [
								{
									"name": "terminal",
									"type": "address",
									"internalType": "address"
								},
								{
									"name": "token",
									"type": "address",
									"internalType": "address"
								},
								{
									"name": "payoutLimits",
									"type": "tuple[]",
									"internalType": "struct JBCurrencyAmount[]",
									"components": [
										{
											"name": "amount",
											"type": "uint224",
											"internalType": "uint224"
										},
										{
											"name": "currency",
											"type": "uint32",
											"internalType": "uint32"
										}
									]
								},
								{
									"name": "surplusAllowances",
									"type": "tuple[]",
									"internalType": "struct JBCurrencyAmount[]",
									"components": [
										{
											"name": "amount",
											"type": "uint224",
											"internalType": "uint224"
										},
										{
											"name": "currency",
											"type": "uint32",
											"internalType": "uint32"
										}
									]
								}
							]
						}
					]
				},
				{
					"name": "encodedConfiguration",
					"type": "bytes",
					"indexed": false,
					"internalType": "bytes"
				},
				{
					"name": "caller",
					"type": "address",
					"indexed": false,
					"internalType": "address"
				}
			],
			"anonymous": false
		},
		{
			"type": "event",
			"name": "DeploySuckers",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"indexed": true,
					"internalType": "uint256"
				},
				{
					"name": "operator",
					"type": "address",
					"indexed": true,
					"internalType": "address"
				},
				{
					"name": "salt",
					"type": "bytes32",
					"indexed": true,
					"internalType": "bytes32"
				},
				{
					"name": "encodedConfiguration",
					"type": "bytes",
					"indexed": false,
					"internalType": "bytes"
				},
				{
					"name": "suckerDeploymentConfiguration",
					"type": "tuple",
					"indexed": false,
					"internalType": "struct REVSuckerDeploymentConfig",
					"components": [
						{
							"name": "deployerConfigurations",
							"type": "tuple[]",
							"internalType": "struct JBSuckerDeployerConfig[]",
							"components": [
								{
									"name": "deployer",
									"type": "address",
									"internalType": "contract IJBSuckerDeployer"
								},
								{
									"name": "mappings",
									"type": "tuple[]",
									"internalType": "struct JBTokenMapping[]",
									"components": [
										{
											"name": "localToken",
											"type": "address",
											"internalType": "address"
										},
										{
											"name": "minGas",
											"type": "uint32",
											"internalType": "uint32"
										},
										{
											"name": "remoteToken",
											"type": "address",
											"internalType": "address"
										},
										{
											"name": "minBridgeAmount",
											"type": "uint256",
											"internalType": "uint256"
										}
									]
								}
							]
						},
						{
							"name": "salt",
							"type": "bytes32",
							"internalType": "bytes32"
						}
					]
				},
				{
					"name": "caller",
					"type": "address",
					"indexed": false,
					"internalType": "address"
				}
			],
			"anonymous": false
		},
		{
			"type": "event",
			"name": "Mint",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"indexed": true,
					"internalType": "uint256"
				},
				{
					"name": "stageId",
					"type": "uint256",
					"indexed": true,
					"internalType": "uint256"
				},
				{
					"name": "beneficiary",
					"type": "address",
					"indexed": true,
					"internalType": "address"
				},
				{
					"name": "count",
					"type": "uint256",
					"indexed": false,
					"internalType": "uint256"
				},
				{
					"name": "caller",
					"type": "address",
					"indexed": false,
					"internalType": "address"
				}
			],
			"anonymous": false
		},
		{
			"type": "event",
			"name": "ReplaceSplitOperator",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"indexed": true,
					"internalType": "uint256"
				},
				{
					"name": "newSplitOperator",
					"type": "address",
					"indexed": true,
					"internalType": "address"
				},
				{
					"name": "caller",
					"type": "address",
					"indexed": false,
					"internalType": "address"
				}
			],
			"anonymous": false
		},
		{
			"type": "event",
			"name": "SetAdditionalOperator",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"indexed": false,
					"internalType": "uint256"
				},
				{
					"name": "additionalOperator",
					"type": "address",
					"indexed": false,
					"internalType": "address"
				},
				{
					"name": "permissionIds",
					"type": "uint256[]",
					"indexed": false,
					"internalType": "uint256[]"
				},
				{
					"name": "caller",
					"type": "address",
					"indexed": false,
					"internalType": "address"
				}
			],
			"anonymous": false
		},
		{
			"type": "event",
			"name": "SetCashOutDelay",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"indexed": true,
					"internalType": "uint256"
				},
				{
					"name": "cashOutDelay",
					"type": "uint256",
					"indexed": false,
					"internalType": "uint256"
				},
				{
					"name": "caller",
					"type": "address",
					"indexed": false,
					"internalType": "address"
				}
			],
			"anonymous": false
		},
		{
			"type": "event",
			"name": "StoreAutoMintAmount",
			"inputs": [
				{
					"name": "revnetId",
					"type": "uint256",
					"indexed": true,
					"internalType": "uint256"
				},
				{
					"name": "stageId",
					"type": "uint256",
					"indexed": true,
					"internalType": "uint256"
				},
				{
					"name": "beneficiary",
					"type": "address",
					"indexed": true,
					"internalType": "address"
				},
				{
					"name": "count",
					"type": "uint256",
					"indexed": false,
					"internalType": "uint256"
				},
				{
					"name": "caller",
					"type": "address",
					"indexed": false,
					"internalType": "address"
				}
			],
			"anonymous": false
		},
		{
			"type": "error",
			"name": "PRBMath_MulDiv_Overflow",
			"inputs": [
				{
					"name": "x",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "y",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "denominator",
					"type": "uint256",
					"internalType": "uint256"
				}
			]
		},
		{
			"type": "error",
			"name": "REVDeployer_CashOutDelayNotFinished",
			"inputs": []
		},
		{
			"type": "error",
			"name": "REVDeployer_CashOutsCantBeTurnedOffCompletely",
			"inputs": []
		},
		{
			"type": "error",
			"name": "REVDeployer_StageNotStarted",
			"inputs": []
		},
		{
			"type": "error",
			"name": "REVDeployer_StageTimesMustIncrease",
			"inputs": []
		},
		{
			"type": "error",
			"name": "REVDeployer_StagesRequired",
			"inputs": []
		},
		{
			"type": "error",
			"name": "REVDeployer_Unauthorized",
			"inputs": []
		}
	];

	const tiersHookDeployerABI = [
		{
			"type": "constructor",
			"inputs": [
				{
					"name": "hook",
					"type": "address",
					"internalType": "contract JB721TiersHook"
				},
				{
					"name": "store",
					"type": "address",
					"internalType": "contract IJB721TiersHookStore"
				},
				{
					"name": "addressRegistry",
					"type": "address",
					"internalType": "contract IJBAddressRegistry"
				},
				{
					"name": "trustedForwarder",
					"type": "address",
					"internalType": "address"
				}
			],
			"stateMutability": "nonpayable"
		},
		{
			"type": "function",
			"name": "ADDRESS_REGISTRY",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "contract IJBAddressRegistry"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "HOOK",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "contract JB721TiersHook"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "STORE",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "contract IJB721TiersHookStore"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "deployHookFor",
			"inputs": [
				{
					"name": "projectId",
					"type": "uint256",
					"internalType": "uint256"
				},
				{
					"name": "deployTiersHookConfig",
					"type": "tuple",
					"internalType": "struct JBDeploy721TiersHookConfig",
					"components": [
						{
							"name": "name",
							"type": "string",
							"internalType": "string"
						},
						{
							"name": "symbol",
							"type": "string",
							"internalType": "string"
						},
						{
							"name": "baseUri",
							"type": "string",
							"internalType": "string"
						},
						{
							"name": "tokenUriResolver",
							"type": "address",
							"internalType": "contract IJB721TokenUriResolver"
						},
						{
							"name": "contractUri",
							"type": "string",
							"internalType": "string"
						},
						{
							"name": "tiersConfig",
							"type": "tuple",
							"internalType": "struct JB721InitTiersConfig",
							"components": [
								{
									"name": "tiers",
									"type": "tuple[]",
									"internalType": "struct JB721TierConfig[]",
									"components": [
										{
											"name": "price",
											"type": "uint104",
											"internalType": "uint104"
										},
										{
											"name": "initialSupply",
											"type": "uint32",
											"internalType": "uint32"
										},
										{
											"name": "votingUnits",
											"type": "uint32",
											"internalType": "uint32"
										},
										{
											"name": "reserveFrequency",
											"type": "uint16",
											"internalType": "uint16"
										},
										{
											"name": "reserveBeneficiary",
											"type": "address",
											"internalType": "address"
										},
										{
											"name": "encodedIPFSUri",
											"type": "bytes32",
											"internalType": "bytes32"
										},
										{
											"name": "category",
											"type": "uint24",
											"internalType": "uint24"
										},
										{
											"name": "discountPercent",
											"type": "uint8",
											"internalType": "uint8"
										},
										{
											"name": "allowOwnerMint",
											"type": "bool",
											"internalType": "bool"
										},
										{
											"name": "useReserveBeneficiaryAsDefault",
											"type": "bool",
											"internalType": "bool"
										},
										{
											"name": "transfersPausable",
											"type": "bool",
											"internalType": "bool"
										},
										{
											"name": "useVotingUnits",
											"type": "bool",
											"internalType": "bool"
										},
										{
											"name": "cannotBeRemoved",
											"type": "bool",
											"internalType": "bool"
										},
										{
											"name": "cannotIncreaseDiscountPercent",
											"type": "bool",
											"internalType": "bool"
										}
									]
								},
								{
									"name": "currency",
									"type": "uint32",
									"internalType": "uint32"
								},
								{
									"name": "decimals",
									"type": "uint8",
									"internalType": "uint8"
								},
								{
									"name": "prices",
									"type": "address",
									"internalType": "contract IJBPrices"
								}
							]
						},
						{
							"name": "reserveBeneficiary",
							"type": "address",
							"internalType": "address"
						},
						{
							"name": "flags",
							"type": "tuple",
							"internalType": "struct JB721TiersHookFlags",
							"components": [
								{
									"name": "noNewTiersWithReserves",
									"type": "bool",
									"internalType": "bool"
								},
								{
									"name": "noNewTiersWithVotes",
									"type": "bool",
									"internalType": "bool"
								},
								{
									"name": "noNewTiersWithOwnerMinting",
									"type": "bool",
									"internalType": "bool"
								},
								{
									"name": "preventOverspending",
									"type": "bool",
									"internalType": "bool"
								}
							]
						}
					]
				}
			],
			"outputs": [
				{
					"name": "newHook",
					"type": "address",
					"internalType": "contract IJB721TiersHook"
				}
			],
			"stateMutability": "nonpayable"
		},
		{
			"type": "function",
			"name": "isTrustedForwarder",
			"inputs": [
				{
					"name": "forwarder",
					"type": "address",
					"internalType": "address"
				}
			],
			"outputs": [
				{
					"name": "",
					"type": "bool",
					"internalType": "bool"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "function",
			"name": "trustedForwarder",
			"inputs": [],
			"outputs": [
				{
					"name": "",
					"type": "address",
					"internalType": "address"
				}
			],
			"stateMutability": "view"
		},
		{
			"type": "event",
			"name": "HookDeployed",
			"inputs": [
				{
					"name": "projectId",
					"type": "uint256",
					"indexed": true,
					"internalType": "uint256"
				},
				{
					"name": "hook",
					"type": "address",
					"indexed": false,
					"internalType": "contract IJB721TiersHook"
				},
				{
					"name": "caller",
					"type": "address",
					"indexed": false,
					"internalType": "address"
				}
			],
			"anonymous": false
		},
		{
			"type": "error",
			"name": "ERC1167FailedCreateClone",
			"inputs": []
		}
	];
const tx_deploy_project = async (name, symbol, owner, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses, chainId) => {
  const contract = croptopDeployerContract(chainId);
  if (!contract) return false;
  const terminal = terminalContract(chainId);
  const projectUri = "QmaJzQjaFKxU2LLyqPTpZoGU47owQcmmvVCP1p4YqeuMUy";
  const contractUri = "";
  const allowedPost = { hook: "0x0000000000000000000000000000000000000000", category: 0, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses};
  const accountingContextToAccept = { token:"0x000000000000000000000000000000000000EEEe", decimals: 18, currency: 61166 };
  const terminalConfiguration = { terminal, accountingContextsToAccept: [accountingContextToAccept] };
  const receipt = await sign(contract, croptopDeployerContractABI, "deployProjectFor", [owner, [terminalConfiguration], projectUri, [allowedPost], contractUri, name, symbol]);

  if (!receipt) return false;
  
  const interface = new ethers.Interface(tiersHookDeployerABI);
  const decodedLog = interface.parseLog(receipt.logs[0]);
  console.log({ decodedLog });
  const collectionAddress = decodedLog.args[1]; 
  console.log({ collectionAddress });
  return collectionAddress;
}

const tx_deploy_revnet = async (name, symbol, owner, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses, stage1AutomintTokenAmount, stage2AutomintTokenAmount, stage3AutomintTokenAmount, stage1InitialIssuanceAmount, stage2InitialIssuanceAmount, stage3InitialIssuanceAmount, stage1SplitPercent, stage2SplitPercent, stage3SplitPercent, stage1PriceIncreasePercent, stage2PriceIncreasePercent, stage3PriceIncreasePercent, stage1PriceIncreaseFrequency, stage2PriceIncreaseFrequency, stage3PriceIncreaseFrequency, stage1CashOutTaxRate, stage2CashOutTaxRate, stage3CashOutTaxRate, stage2StartsAtOrAfter, stage3StartsAtOrAfter, chainId) => {
  const contract = revnetDeployerContract(chainId);
  if (!contract) return false;
  const terminal = terminalContract(chainId);
  const loans = loansContract(chainId);
  const projectUri = "QmaJzQjaFKxU2LLyqPTpZoGU47owQcmmvVCP1p4YqeuMUy";
  const contractUri = "";
  const allowedPost = { hook: "0x0000000000000000000000000000000000000000", category: 0, minimumPrice, minimumTotalSupply, maximumTotalSupply, allowedAddresses};
  const accountingContextToAccept = { token:"0x000000000000000000000000000000000000EEEe", decimals: 18, currency: 61166 };
  const terminalConfiguration = { terminal, accountingContextsToAccept: [accountingContextToAccept] };
  const baseCurrency = 61166;
  const stage1StartsAtOrAfter = 1;
  const autoMintStage1 = stage1AutomintTokenAmount == 0 ? [] : [{ chainId, count: stage1AutomintTokenAmount, beneficiary: owner}];
  const stageConfiguration1 = {  startsAtOrAfter: stage1StartsAtOrAfter, splitPercent: stage1SplitPercent, initialIssuance: stage1InitialIssuanceAmount, issuanceDecayFrequency: stage1PriceIncreaseFrequency, issuanceDecayPercent: stage1PriceIncreasePercent, cashOutTaxRate: stage1CashOutTaxRate, autoMints: autoMintStage1, extraMetadata: "0x0000" };
  const stageConfigurations = [stageConfiguration1];
  if (stage2StartsAtOrAfter != 0) {
  	const autoMintStage2 = stage2AutomintTokenAmount == 0 ? [] : [{ chainId, count: stage2AutomintTokenAmount, beneficiary: owner}];
    stageConfigurations.push({startsAtOrAfter: stage2StartsAtOrAfter, splitPercent: stage2SplitPercent, initialIssuance: stage2InitialIssuanceAmount, issuanceDecayFrequency: stage2PriceIncreaseFrequency, issuanceDecayPercent: stage2PriceIncreasePercent, cashOutTaxRate: stage2CashOutTaxRate, autoMints: autoMintStage2, extraMetadata: "0x0000"}); 
  }
  if (stage3StartsAtOrAfter != 0) {
  	const autoMintStage3 = stage3AutomintTokenAmount == 0 ? [] : [{ chainId, count: stage3AutomintTokenAmount, beneficiary: owner}];
    stageConfigurations.push({startsAtOrAfter: stage3StartsAtOrAfter, splitPercent: stage3SplitPercent, initialIssuance: stage3InitialIssuanceAmount, issuanceDecayFrequency: stage3PriceIncreaseFrequency, issuanceDecayPercent: stage3PriceIncreasePercent, cashOutTaxRate: stage3CashOutTaxRate, autoMints: autoMintStage3, extraMetadata: "0x0000" }); 
  }
  const description = { name, ticker: symbol, uri: projectUri, salt: "0x0000000000000000000000000000000000000000000000000000000000000000" };
  const loanSource = { token: "0x000000000000000000000000000000000000EEEe", terminal };
  const revnetConfiguration = { description, baseCurrency, splitOperator: owner, stageConfigurations, loanSources: [loanSource], loans, allowCrosschainSuckerExtension: true };
  const buybackHookConfiguration = { hook: "0x0000000000000000000000000000000000000000", poolConfigurations: []};
  const baseUri = "ipfs://";
  const tokenUriResolver = "0x0000000000000000000000000000000000000000";
  const tiers = [];
  const currency = 61166;
  const decimals = 18;
  const prices = "0x0000000000000000000000000000000000000000";
  const tiersConfig = { tiers, currency, decimals, prices };
  const reserveBeneficiary = "0x0000000000000000000000000000000000000000";
  const flags = { noNewTiersWithReserves: false, noNewTiersWithVotes: false, noNewTiersWithOwnerMinting: false, preventOverspending: false };
  const baseline721HookConfiguration = { name, symbol, baseUri, tokenUriResolver, contractUri, tiersConfig, reserveBeneficiary, flags };
  const hookConfiguration = {baseline721HookConfiguration, splitOperatorCanAdjustTiers: true, splitOperatorCanUpdateMetadata: true, splitOperatorCanMint: false, splitOperatorCanIncreaseDiscountPercent: true};
  const suckerDeploymentConfiguration = { deployerConfigurations: [], salt: "0x0000000000000000000000000000000000000000000000000000000000000000" };
  const receipt = await sign(contract, revnetDeployerContractABI, "deployWith721sFor", [0, revnetConfiguration, [terminalConfiguration], buybackHookConfiguration, suckerDeploymentConfiguration, hookConfiguration, [allowedPost]]);
  
  if (!receipt) return false;
  
  const interface = new ethers.Interface(tiersHookDeployerABI);
  const decodedLog = interface.parseLog(receipt.logs[0]);
  const collectionAddress = decodedLog.args[1]; 
  return collectionAddress;
}
