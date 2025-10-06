const getProvider = (chainId) => {
  switch (chainId) {
    case 1: return new ethers.JsonRpcProvider(env.ethereumMainnetRPC || "https://eth-mainnet.g.alchemy.com/v2/PvnApS5JjmPVuC0A4WLdFfaF8oD_z9e5"); //https://rpc.ankr.com/eth");
    case 8453: return new ethers.JsonRpcProvider(env.baseMainnetRPC || "https://rpc.ankr.com/base");
    case 42161: return new ethers.JsonRpcProvider(env.arbitrumMainnetRPC || "https://rpc.ankr.com/arbitrum");
    case 10: return new ethers.JsonRpcProvider(env.optimismMainnetRPC || "https://rpc.ankr.com/optimism");
    case 11155111: return new ethers.JsonRpcProvider(env.ethereumSepoliaRPC || "https://rpc.ankr.com/eth_sepolia");
    case 11155420: return new ethers.JsonRpcProvider(env.optimismSepoliaRPC || "https://rpc.ankr.com/optimism_sepolia");
    case 84532: return new ethers.JsonRpcProvider(env.baseSepoliaRPC || "https://rpc.ankr.com/base_sepolia");
    case 421614: return new ethers.JsonRpcProvider(env.arbitrumSepoliaRPC || "https://rpc.ankr.com/arbitrum_sepolia");
    default: return new ethers.BrowserProvider(window.ethereum);
  }
}

const erc2771ForwarderContract = (chainId) => {
  switch (chainId) {
    case 1: // Ethereum Mainnet
      return "0xc29d6995ab3b0df4650ad643adeac55e7acbb566";
    case 10: // Optimism
      return "0xc29d6995ab3b0df4650ad643adeac55e7acbb566";
    case 42161: // Arbitrum
      return "0xc29d6995ab3b0df4650ad643adeac55e7acbb566";
    case 8453: // Base
      return "0xc29d6995ab3b0df4650ad643adeac55e7acbb566";
    case 11155111: // Arbitrum Sepolia	
      return "0xc29d6995ab3b0df4650ad643adeac55e7acbb566";
    case 11155420: // Optimism Sepolia
      return "0xc29d6995ab3b0df4650ad643adeac55e7acbb566";
    case 84532: // Base Sepolia
      return "0xc29d6995ab3b0df4650ad643adeac55e7acbb566";
    case 421614: // Arbitrum Sepolia
      return "0xc29d6995ab3b0df4650ad643adeac55e7acbb566";
  }
}
const trustedForwarderContractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "eip712Domain",
		"outputs": [
			{
				"internalType": "bytes1",
				"name": "fields",
				"type": "bytes1"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "version",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "chainId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "verifyingContract",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "salt",
				"type": "bytes32"
			},
			{
				"internalType": "uint256[]",
				"name": "extensions",
				"type": "uint256[]"
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
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "gas",
						"type": "uint256"
					},
					{
						"internalType": "uint48",
						"name": "deadline",
						"type": "uint48"
					},
					{
						"internalType": "bytes",
						"name": "data",
						"type": "bytes"
					},
					{
						"internalType": "bytes",
						"name": "signature",
						"type": "bytes"
					}
				],
				"internalType": "struct ERC2771Forwarder.ForwardRequestData",
				"name": "request",
				"type": "tuple"
			}
		],
		"name": "execute",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "gas",
						"type": "uint256"
					},
					{
						"internalType": "uint48",
						"name": "deadline",
						"type": "uint48"
					},
					{
						"internalType": "bytes",
						"name": "data",
						"type": "bytes"
					},
					{
						"internalType": "bytes",
						"name": "signature",
						"type": "bytes"
					}
				],
				"internalType": "struct ERC2771Forwarder.ForwardRequestData[]",
				"name": "requests",
				"type": "tuple[]"
			},
			{
				"internalType": "address payable",
				"name": "refundReceiver",
				"type": "address"
			}
		],
		"name": "executeBatch",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "nonces",
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
				"components": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "gas",
						"type": "uint256"
					},
					{
						"internalType": "uint48",
						"name": "deadline",
						"type": "uint48"
					},
					{
						"internalType": "bytes",
						"name": "data",
						"type": "bytes"
					},
					{
						"internalType": "bytes",
						"name": "signature",
						"type": "bytes"
					}
				],
				"internalType": "struct ERC2771Forwarder.ForwardRequestData",
				"name": "request",
				"type": "tuple"
			}
		],
		"name": "verify",
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
		"anonymous": false,
		"inputs": [],
		"name": "EIP712DomainChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "signer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "nonce",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"name": "ExecutedForwardRequest",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint48",
				"name": "deadline",
				"type": "uint48"
			}
		],
		"name": "ERC2771ForwarderExpiredRequest",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "signer",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			}
		],
		"name": "ERC2771ForwarderInvalidSigner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "requestedValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "msgValue",
				"type": "uint256"
			}
		],
		"name": "ERC2771ForwarderMismatchedValue",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "target",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "forwarder",
				"type": "address"
			}
		],
		"name": "ERC2771UntrustfulTarget",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "FailedCall",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "currentNonce",
				"type": "uint256"
			}
		],
		"name": "InvalidAccountNonce",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidShortString",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "str",
				"type": "string"
			}
		],
		"name": "StringTooLong",
		"type": "error"
	}
];

const getSigner = async (chainId) => {
  const provider = getProvider(chainId); 
  return await provider.getSigner();
}

const getChainId = async (chainId) => {
  const provider = getProvider(chainId); 
  let network = await provider.getNetwork();
  return parseInt(network.chainId);
}

const switchNetwork = async (id, chainId) => {
  const provider = getProvider(chainId); 
  return await provider.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: `0x${id.toString(16)}`}],
  });
}

const view = async (chainId, contractAddress, contractAbi, fn, params) => {
    const contract = new ethers.Contract(contractAddress, contractAbi, getProvider(chainId));
    return await contract[fn](...params);
}

const sign = async (contractAddress, contractAbi, fn, params) => {
    const contract = new ethers.Contract(contractAddress, contractAbi, await getSigner());
    const tx = await contract[fn](...params);
    if (!tx) return false;
    return await tx.wait();
}

// Helper to switch to a chain, adding it if needed
async function ensureWalletOnChain(chainId) {
  if (window.ethereum && window.ethereum.networkVersion !== String(chainId)) {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x' + chainId.toString(16) }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        const chainParams = getAddChainParams(chainId);
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [chainParams],
        });
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x' + chainId.toString(16) }],
        });
      } else {
        throw switchError;
      }
    }
    // // Wait a moment for MetaMask to update
    // await new Promise(r => setTimeout(r, 500));
  }
}

// Placeholder for EIP-2771 signing function
const signErc2771ForwardRequest = async (forwardRequestData, chainId) => {
  // Always get a fresh signer for the current chain
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const address = signer.address;
  if (!address) throw new Error('No signer address');
  // 48 hours from now
  const deadline = Math.floor((Date.now() + 3600 * 48 * 1000) / 1000);
  // Get nonce from forwarder contract
  const forwarderAddress = erc2771ForwarderContract(chainId);
  const forwarder = new ethers.Contract(forwarderAddress, trustedForwarderContractABI, signer);
  const nonce = await forwarder.nonces(address);
  // Prepare the typed data for EIP-712 signing
  const domain = {
    name: "Juicebox",
    version: "1",
    chainId: chainId.toString(),
    verifyingContract: forwarderAddress,
  };
  const types = {
    ForwardRequest: [
      { name: "from", type: "address" },
      { name: "to", type: "address" },
      { name: "value", type: "uint256" },
      { name: "gas", type: "uint256" },
      { name: "nonce", type: "uint256" },
      { name: "deadline", type: "uint48" },
      { name: "data", type: "bytes" },
    ],
  };
  const message = {
    ...forwardRequestData,
    nonce: nonce.toString(),
    deadline: deadline.toString(),
  };
  // Sign the typed data
  const signature = await signer.signTypedData(domain, types, message);
  // Encode the execute function call
  const iface = new ethers.Interface(trustedForwarderContractABI);
  const encoded = iface.encodeFunctionData("execute", [{ ...message, signature }]);
  return encoded;
}

function getAddChainParams(chainId) {
  switch (chainId) {
    case 1:
      return {
        chainId: '0x1',
        chainName: 'Ethereum Mainnet',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: ['https://rpc.ankr.com/eth'],
        blockExplorerUrls: ['https://etherscan.io'],
      };
    case 10:
      return {
        chainId: '0xa',
        chainName: 'Optimism',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: ['https://mainnet.optimism.io'],
        blockExplorerUrls: ['https://optimistic.etherscan.io'],
      };
    case 42161:
      return {
        chainId: '0xa4b1',
        chainName: 'Arbitrum One',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: ['https://arb1.arbitrum.io/rpc'],
        blockExplorerUrls: ['https://arbiscan.io'],
      };
    case 8453:
      return {
        chainId: '0x2105',
        chainName: 'Base',
        nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: ['https://mainnet.base.org'],
        blockExplorerUrls: ['https://basescan.org'],
      };
    // Add more as needed
    default:
      throw new Error('Unknown chainId: ' + chainId);
  }
}

// Helper function to handle both single and multi-chain deployments
const handleDeployment = async (chainIds, buildDeploymentData, contractAddress, contractABI, functionName, value) => {
  if (!Array.isArray(chainIds)) chainIds = [chainIds];
  if (chainIds.length === 1) {
    // Single chain deployment
    const chainId = chainIds[0];
    const contract = contractAddress(chainId);
    if (!contract) return false;
    const deploymentData = await buildDeploymentData(chainId);
    const receipt = await sign(contract, contractABI, functionName, deploymentData);
    return receipt;
  }
  // Multi-chain deployment with Relayr
  const userAddress = (await getSigner()).address;
  const relayrTransactions = [];
  for (const chainId of chainIds) {
    // Always ensure wallet is on the correct chain before signing
    await ensureWalletOnChain(chainId);
    // Always get a fresh provider/signer for the current chain
    const contract = contractAddress(chainId);
    const deploymentData = await buildDeploymentData(chainId);
    const iface = new ethers.Interface(contractABI);
    const encodedData = iface.encodeFunctionData(functionName, deploymentData);
    const forwardRequest = {
      from: userAddress,
      to: contract,
      value: "0x0",
      gas: "0x" + (1000000 * chainIds.length).toString(16),
      data: encodedData,
    };
    const encoded = await signErc2771ForwardRequest(forwardRequest, chainId);
    relayrTransactions.push({
      chain: chainId,
      data: encoded,
      target: erc2771ForwarderContract(chainId),
      value: "0"
    });
  }
  const quote = await getRelayrTxQuote(relayrTransactions);
  if (!quote) {
    throw new Error("Failed to get Relayr quote");
  }
  return quote;
}

// Get a quote for a bundle of Relayr transactions
const getRelayrTxQuote = async (relayrTransactions) => {
  const res = await fetch('https://api.relayr.ba5ed.com/v1/bundle/prepaid', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      transactions: relayrTransactions,
      virtual_nonce_mode: "Disabled",
    }),
  });
  return await res.json();
}

// Send a Relayr transaction
const sendRelayrTx = async (paymentInfo) => {
  // paymentInfo: { target, calldata, amount, chain }
  const signer = await getSigner();
  // Switch to the correct chain if needed
  if (window.ethereum && window.ethereum.networkVersion !== String(paymentInfo.chain)) {
    if (typeof ensureWalletOnChain === 'function') {
      await ensureWalletOnChain(paymentInfo.chain);
    }
  }
  // Send the transaction
  const tx = await signer.sendTransaction({
    to: paymentInfo.target,
    data: paymentInfo.calldata,
    value: BigInt(paymentInfo.amount),
  });
  return tx;
}

const pollRelayrBundleStatus = async (bundleUuid, callback) => {
	let done = false;
	while (!done) {
		try {
		const res = await fetch(`https://api.relayr.ba5ed.com/v1/bundle/${bundleUuid}`);
		const bundleStatus = await res.json();
		callback(bundleStatus);
		done = bundleStatus.transactions.every(tx => tx.status && (tx.status.state === 'Success' || tx.status.state === 'Failed'));
		if (!done) await new Promise(r => setTimeout(r, 3000));
		} catch (err) {
		callback({ transactions: [] });
		break;
	}
  }
}
