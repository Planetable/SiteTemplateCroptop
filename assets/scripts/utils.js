const encodeIPFSUri = (cid) => { 
  try {
    const decodedCID = bs58.decode(cid);
    const slicedCID = decodedCID.slice(2);
    const uint8Array = new Uint8Array(slicedCID);
    let hex = '0x';
    for (let i = 0; i < uint8Array.length; i++) 
      hex += uint8Array[i].toString(16).padStart(2, '0');
    return hex;
  } catch (e) {
    return "0x0000000000000000000000000000000000000000000000000000000000000000"; 
  }
}

const encodeIPFSUriFrom = async (prefix, itemId) => {
  // Create the content's encoded IPFS URL.
  const cidUrl = `${prefix}${itemId}/nft.json.cid.txt`;
  const cid = await (await fetch(cidUrl)).text();
  return cid ? encodeIPFSUri(cid) : "0x0000000000000000000000000000000000000000000000000000000000000000";
}

const formatDate = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month}.${day}.${year.toString().slice(-2)}`;
}

const formatTimestamp = (timestamp) => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const date = new Date((timestamp + 978307200) * 1000);
  return formatDate(date);
}

function formatEth(wei) {
  return (Number(wei) / 1e18).toFixed(8).replace(/0+$/, '').replace(/\.$/, '');
}

const formatPlayclock = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
} 

const chainExplorerUrls = (chainId) => {
  switch (chainId) {
    case 1: return 'https://etherscan.io/tx/';
    case 10: return 'https://optimistic.etherscan.io/tx/';
    case 42161: return 'https://arbiscan.io/tx/';
    case 8453: return 'https://basescan.org/tx/';
  }
};

const resolveChainId = (value) => {
  switch (value) {
    case "ethereum sepolia": return 11155111; 
    case "optimism sepolia": return 11155420; 
    case "base sepolia": return 84532; 
    case "arbitrum sepolia": return 421614; 
    case "ethereum mainnet": return 1;
    case "optimism mainnet": return 10;
    case "arbitrum mainnet": return 42161;
    case "base mainnet": return 8453;
  }
}

const resolveChainSelectIndex = (chain) => {
  switch (chain) {
    case "ethereum mainnet": return 0; 
    case "optimism mainnet": return 1; 
    case "arbitrum mainnet": return 2; 
    case "base mainnet": return 3; 
    case "ethereum sepolia": return 0; 
    case "optimism sepolia": return 1; 
    case "arbitrum sepolia": return 2; 
    case "base sepolia": return 3; 
  }
}

const resolveChain = (chainId) => {
  switch (chainId) {
    case 1: return "ethereum mainnet"; 
    case 10: return "optimism mainnet"; 
    case 8453: return "base mainnet"; 
    case 42161: return "arbitrum mainnet"; 
    case 11155111: return "ethereum sepolia"; 
    case 11155420: return "optimism sepolia"; 
    case 84532: return "base sepolia"; 
    case 421614: return "arbitrum sepolia"; 
  }
}

const resolveChainLabel = (chainId) => {
  switch (chainId) {
    case 1: return "Ethereum"; 
    case 10: return "Optimism"; 
    case 8453: return "Base"; 
    case 42161: return "Arbitrum"; 
    case 11155111: return "Ethereum Sepolia"; 
    case 11155420: return "Optimism Sepolia"; 
    case 84532: return "Base Sepolia"; 
    case 421614: return "Arbitrum Sepolia"; 
  }
}

const cpnCollectionAddress = (chain) => {
  switch (chain) {
    case "ethereum mainnet":
      return "0x929B6c04fE40fb265Cd0AbB7928826DC965E540D";
    case "optimism mainnet":
      return "0x929B6c04fE40fb265Cd0AbB7928826DC965E540D";
    case "base mainnet":
      return "0x929B6c04fE40fb265Cd0AbB7928826DC965E540D";
    case "ethereum sepolia":
      return "0x929B6c04fE40fb265Cd0AbB7928826DC965E540D";
    case "optimism sepolia":
      return "0x929B6c04fE40fb265Cd0AbB7928826DC965E540D";
    case "base sepolia":
      return "0x929B6c04fE40fb265Cd0AbB7928826DC965E540D";
    case "arbitrum sepolia":
      return "0x929B6c04fE40fb265Cd0AbB7928826DC965E540D";
  }
}

const resolveCollectionAddress = (chain) => {
  console.log({ env, chain });
  // use sepolia as default.
  switch (chain) {
    case "ethereum mainnet":
      return env.ethereumMainnetCollectionAddress || cpnCollectionAddress(chain);
    case "optimism mainnet":
      return env.optimismMainnetCollectionAddress || cpnCollectionAddress(chain);
    case "base mainnet":
      return env.baseMainnetCollectionAddress || cpnCollectionAddress(chain);
    case "arbitrum mainnet":
      return env.arbitrumMainnetCollectionAddress || cpnCollectionAddress(chain);
    case "ethereum sepolia":
      return env.ethereumSepoliaCollectionAddress || cpnCollectionAddress(chain);
    case "optimism sepolia":
      return env.optimismSepoliaCollectionAddress || cpnCollectionAddress(chain);
    case "base sepolia":
      return env.baseSepoliaCollectionAddress || cpnCollectionAddress(chain);
    case "arbitrum sepolia":
      return env.arbitrumSepoliaCollectionAddress || cpnCollectionAddress(chain);
  }
}

const resolveCollectionCategory = (chain) => {
  switch (chain) {
    case "ethereum mainnet":
      return env.collectionCategory || env.ethereumMainnetCollectionCategory || 0;
    case "optimism mainnet":
      return env.optimismMainnetCollectionCategory || env.ethereumMainnetCollectionCategory || 0;
    case "base mainnet":
      return env.baseMainnetCollectionCategory || env.ethereumMainnetCollectionCategory || 0;
    case "ethereum sepolia":
      return env.collectionCategory || env.ethereumSepoliaCollectionCategory || 0;
    case "optimism sepolia":
      return env.optimismSepoliaCollectionCategory || env.ethereumSepoliaCollectionCategory || 0;
    case "base sepolia":
      return env.baseSepoliaCollectionCategory || env.ethereumSepoliaCollectionCategory || 0;
    case "arbitrum sepolia":
      return env.arbitrumSepoliaCollectionCategory || env.ethereumSepoliaCollectionCategory || 0;
  }
}

const resolveCPNBeneficiaryAddress = (chain) => {
  switch (chain) {
    case "ethereum mainnet":
      return env.ethereumMainnetBeneficiaryAddress;
    case "optimism mainnet":
      return env.optimismMainnetBeneficiaryAddress || env.ethereumMainnetBeneficiaryAddress;
    case "base mainnet":
      return env.baseMainnetBeneficiaryAddress || env.ethereumMainnetBeneficiaryAddress;
    case "ethereum sepolia":
      return env.ethereumSepoliaBeneficiaryAddress;
    case "optimism sepolia":
      return env.optimismSepoliaBeneficiaryAddress || env.ethereumSepoliaBeneficiaryAddress;;
    case "base sepolia":
      return env.baseSepoliaBeneficiaryAddress || env.ethereumSepoliaBeneficiaryAddress;;
    case "arbitrum sepolia":
      return env.arbitrumSepoliaBeneficiaryAddress || env.ethereumSepoliaBeneficiaryAddress;;
  }
}

const projectLinkBase = (chain) => {
  switch (chain) {
    case "ethereum mainnet":
      return "https://juicebox.money/v4/eth:";
    case "optimism mainnet":
      return "https://juicebox.money/v4/op:";
    case "arbitrum mainnet":
      return "https://juicebox.money/v4/arb:";
    case "base mainnet":
      return "https://juicebox.money/v4/base:";
    case "ethereum sepolia":
      return "https://sepolia.juicebox.money/v4/eth:";
    case "optimism sepolia":
      return "https://sepolia.juicebox.money/v4/op:";
    case "base sepolia":
      return "https://sepolia.juicebox.money/v4/base:";
    case "arbitrum sepolia":
      return "https://sepolia.juicebox.money/v4/arb:";
  }
}

const renderMarkdown = (text) => {
  const md = window.markdownit({
    html: true,
    xhtmlOut: false,
    linkify: true
  });
  md.use(window.markdownItAnchor, { permalink: true, permalinkBefore: false, permalinkSymbol: '#' })
  .use(window.markdownitTaskLists)
  .use(window.markdownitFootnote);
  return md.render(text);
}

const fixedPointNumber = (numberString, decimals) => {
  // Find the position of the decimal point
  let decimalPos = numberString.indexOf('.');
  let fixedString;

  if (decimalPos !== -1) {
    // Split the number into whole and decimal parts
    let wholePart = numberString.substring(0, decimalPos);
    let decimalPart = numberString.substring(decimalPos + 1);
    // If the decimal part is shorter than the desired precision, pad it with zeros
    while (decimalPart.length < decimals) {
      decimalPart += '0';
    }
    // Combine the whole part and the truncated/padded decimal part
    fixedString = wholePart + decimalPart.substring(0, decimals);
  } else {
    // If there is no decimal part, just pad the number with zeros
    fixedString = numberString + '0'.repeat(decimals);
  }

  // Convert the string to a BigInt
  return BigInt(fixedString);
}

const loadingAnimationPace = 100;
let animationIntervals = {};

/// Animate the loading ticker.
const startLoadingAnimation = (loadingAnimationId) => {
  const loadingAnimation = document.getElementById(loadingAnimationId);
  loadingAnimation.style.display = "initial";
  const loadingAnimationFrames = ['-', '\\', '|', '/'];
  let currentFrame = 0;

  const animate = (firstTime) => {
    loadingAnimation.textContent = loadingAnimationFrames[currentFrame];
    currentFrame = (currentFrame + 1) % loadingAnimationFrames.length;
    if (firstTime || animationIntervals[loadingAnimationId]) animationIntervals[loadingAnimationId] = setTimeout(() => animate(false), loadingAnimationPace);
  }

  animate(true);
}

/// Stop animating the loading ticker.
const stopLoadingAnimation = (loadingAnimationId) => {
  const loadingAnimation = document.getElementById(loadingAnimationId);
  animationIntervals[loadingAnimationId] = clearTimeout(animationIntervals[loadingAnimationId]);
  loadingAnimation.style.display = "none";
}

let audioAnimationInterval;
const audioAnimationFrames = ['▄', '▅', '█'];

const prepareAudioAnimation = (audioAnimationId) => {
  const audioAnimation = document.getElementById(audioAnimationId);
  audioAnimation.innerHTML = audioAnimationFrames[1] + audioAnimationFrames[2] + audioAnimationFrames[0];
}
const startAudioAnimation = (audioAnimationId) => {
  const audioAnimation = document.getElementById(audioAnimationId);
  const audioAnimationPace = 100;

  const animate = () => {
    const oneOrTwo = Math.floor(Math.random() * 2) + 1;
    const char0 = audioAnimationFrames[(audioAnimationFrames.indexOf(audioAnimation.innerHTML.charAt(0)) + oneOrTwo) % 3]; 
    const char1 = audioAnimationFrames[(audioAnimationFrames.indexOf(audioAnimation.innerHTML.charAt(1)) + oneOrTwo) % 3]; 
    const char2 = audioAnimationFrames[(audioAnimationFrames.indexOf(audioAnimation.innerHTML.charAt(2)) + oneOrTwo) % 3]; 
    audioAnimation.innerHTML = char0 + char1 + char2;
    animationIntervals[audioAnimationId] = setTimeout(animate, audioAnimationPace);
  }
  animate();
}

const stopAudioAnimation = (audioAnimationId) => {
  const audioAnimation = document.getElementById(audioAnimationId);
  animationIntervals[audioAnimationId] = clearTimeout(animationIntervals[audioAnimationId]);
}

const generateSalt = () => {
  return "0x" + [...crypto.getRandomValues(new Uint8Array(32))].map(x => x.toString(16).padStart(2, '0')).join("");
}

// IJB721Hook ABI for PROJECT_ID function
const IJB721HookABI = [
  {
    "inputs": [],
    "name": "PROJECT_ID",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

// Get PROJECT_ID from a collection address (which is the IJB721Hook)
const getProjectId = async (collectionAddress, chainId) => {
  try {
    console.log(`[getProjectId] Getting PROJECT_ID for collectionAddress: ${collectionAddress}, chainId: ${chainId}`);
    const projectId = await view(chainId, collectionAddress, IJB721HookABI, "PROJECT_ID", []);
    console.log(`[getProjectId] Raw projectId from contract:`, projectId);
    console.log(`[getProjectId] projectId type:`, typeof projectId);
    console.log(`[getProjectId] projectId as BigInt:`, projectId?.toString());
    // Convert to string for GraphQL queries
    const projectIdString = projectId.toString();
    console.log(`[getProjectId] Returning projectId as string: ${projectIdString}`);
    return projectIdString;
  } catch (error) {
    console.error(`Error getting PROJECT_ID for ${collectionAddress} on chain ${chainId}:`, error);
    return null;
  }
}

// Generate project ID string in format: version-projectId-chainId
// Version is always 5 for Juicebox v5
const idForProject = (version, projectId, chainId) => {
  return `${version}-${projectId}-${chainId}`;
}

// Generate suckerGroupId from an array of project ID strings
// Projects are sorted, joined, encoded, hashed with keccak256, and substring taken
const idForSuckerGroup = (projects) => {
  console.log(`[idForSuckerGroup] Input projects:`, projects);
  // Sort the projects array
  const sorted = projects.sort();
  console.log(`[idForSuckerGroup] Sorted projects:`, sorted);
  
  // Join with hyphens
  const str = sorted.join("-");
  console.log(`[idForSuckerGroup] Joined string:`, str);
  
  // Encode to Uint8Array
  const arr = new TextEncoder().encode(str);
  console.log(`[idForSuckerGroup] Encoded array length:`, arr.length);
  
  // Convert Uint8Array to hex string for ethers.keccak256
  // ethers.keccak256 expects a hex string (0x...) or BytesLike
  let hex = '0x';
  for (let i = 0; i < arr.length; i++) {
    hex += arr[i].toString(16).padStart(2, '0');
  }
  console.log(`[idForSuckerGroup] Hex string:`, hex);
  
  // Hash with keccak256 (ethers is available globally)
  const hash = ethers.keccak256(hex);
  console.log(`[idForSuckerGroup] Hash (full):`, hash);
  
  // Trim leading '0x' and use next 32 characters
  const suckerGroupId = hash.substring(2, 34);
  console.log(`[idForSuckerGroup] Final suckerGroupId:`, suckerGroupId);
  
  return suckerGroupId;
}

// Bendystraw service URLs
const bendystrawUrl = "https://bendystraw.xyz";
const testnetBendystrawUrl = "https://testnet.bendystraw.xyz";
const BENDYSTRAW_API_KEY = "3ZNJpGtazh5fwYoSW59GWDEj";

// Get bendystraw URL based on chain
const getBendystrawUrl = (chainId) => {
  const isMainnet = [1, 8453, 42161, 10].includes(chainId); // mainnet, base, arbitrum, optimism
  const baseUrl = isMainnet ? bendystrawUrl : testnetBendystrawUrl;
  return BENDYSTRAW_API_KEY !== "" ? `${baseUrl}/${BENDYSTRAW_API_KEY}` : baseUrl;
}

// Fetch project data from bendystraw service (to get suckerGroupId)
const fetchProjectFromBendystraw = async (projectId, chainId) => {
  try {
    console.log(`[fetchProjectFromBendystraw] Starting - projectId: ${projectId}, chainId: ${chainId}`);
    console.log(`[fetchProjectFromBendystraw] projectId type:`, typeof projectId);
    console.log(`[fetchProjectFromBendystraw] projectId value:`, projectId);
    
    const url = getBendystrawUrl(chainId);
    console.log(`[fetchProjectFromBendystraw] bendystraw URL: ${url}`);
    
    // GraphQL query for project data - using projects which returns items array
    // Note: projectId must be an Int, not String
    const query = `
      query GetProject($projectId: Int!, $chainId: Int!) {
        projects(where: { projectId: $projectId, chainId: $chainId }, limit: 1) {
          items {
            token
            tokenSymbol
            decimals
            suckerGroupId
          }
        }
      }
    `;
    
    // Convert projectId to integer (it comes as a string from getProjectId)
    const projectIdInt = parseInt(projectId, 10);
    console.log(`[fetchProjectFromBendystraw] Converting projectId "${projectId}" (${typeof projectId}) to int: ${projectIdInt}`);
    
    const variables = { projectId: projectIdInt, chainId };
    console.log(`[fetchProjectFromBendystraw] GraphQL variables:`, variables);
    console.log(`[fetchProjectFromBendystraw] variables.projectId type:`, typeof variables.projectId);
    console.log(`[fetchProjectFromBendystraw] variables.projectId value:`, variables.projectId);
    console.log(`[fetchProjectFromBendystraw] variables.chainId type:`, typeof variables.chainId);
    
    const response = await fetch(`${url}/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query,
        variables
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const result = await response.json();
    console.log(`[fetchProjectFromBendystraw] GraphQL response:`, result);
    
    if (result.errors) {
      console.error(`[fetchProjectFromBendystraw] GraphQL errors:`, result.errors);
      throw new Error(result.errors[0].message);
    }
    
    const projectData = result.data?.projects?.items?.[0] || null;
    console.log(`[fetchProjectFromBendystraw] Extracted project data:`, projectData);
    return projectData;
  } catch (error) {
    console.error(`[fetchProjectFromBendystraw] Error fetching project ${projectId} on chain ${chainId}:`, error);
    return null;
  }
}

// Fetch balance from suckerGroup directly using suckerGroupId
const fetchBalanceFromSuckerGroup = async (suckerGroupId, chainId) => {
  try {
    console.log(`[fetchBalanceFromSuckerGroup] Starting - suckerGroupId: ${suckerGroupId}, chainId: ${chainId}`);
    const url = getBendystrawUrl(chainId);
    console.log(`[fetchBalanceFromSuckerGroup] bendystraw URL: ${url}`);
    
    // Query suckerGroup directly using id (the schema expects 'id', not 'suckerGroupId')
    const query = `
      query GetSuckerGroupBalance($id: String!) {
        suckerGroup(id: $id) {
          balance
        }
      }
    `;
    
    const variables = { id: String(suckerGroupId) };
    console.log(`[fetchBalanceFromSuckerGroup] GraphQL variables:`, variables);
    
    const response = await fetch(`${url}/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query,
        variables
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const result = await response.json();
    console.log(`[fetchBalanceFromSuckerGroup] GraphQL response:`, result);
    
    if (result.errors) {
      console.error(`[fetchBalanceFromSuckerGroup] GraphQL errors:`, result.errors);
      throw new Error(result.errors[0].message);
    }
    
    const balance = result.data?.suckerGroup?.balance || null;
    console.log(`[fetchBalanceFromSuckerGroup] Extracted balance:`, balance);
    return balance;
  } catch (error) {
    console.error(`[fetchBalanceFromSuckerGroup] Error fetching balance for suckerGroupId ${suckerGroupId}:`, error);
    return null;
  }
}

// Fetch owners count from bendystraw service
const fetchOwnersFromBendystraw = async (projectId, chainId, suckerGroupId) => {
  try {
    console.log(`[fetchOwnersFromBendystraw] Starting - projectId: ${projectId}, chainId: ${chainId}, suckerGroupId: ${suckerGroupId}`);
    const url = getBendystrawUrl(chainId);
    // GraphQL query for participants (owners) - matching the pattern from the reference image
    // Note: balance_gt expects a BigInt (string) value, not an integer
    // suckerGroupId is unique and doesn't need chainId
    const query = `
      query GetParticipants($suckerGroupId: String!) {
        participants(where: { suckerGroupId: $suckerGroupId, balance_gt: "0" }, limit: 1000) {
          items {
            address
            balance
          }
        }
      }
    `;
    
    const variables = { suckerGroupId: String(suckerGroupId) };
    console.log(`[fetchOwnersFromBendystraw] GraphQL variables:`, variables);
    
    const response = await fetch(`${url}/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query,
        variables
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const result = await response.json();
    console.log(`[fetchOwnersFromBendystraw] GraphQL response:`, result);
    
    if (result.errors) {
      console.error(`[fetchOwnersFromBendystraw] GraphQL errors:`, result.errors);
      throw new Error(result.errors[0].message);
    }
    
    // Access participants - try both possible response structures
    const participantsData = result.data?.participants?.items || result.data?.participants?.participants?.items || [];
    console.log(`[fetchOwnersFromBendystraw] Raw participants items:`, participantsData);
    console.log(`[fetchOwnersFromBendystraw] Total participants before dedupe:`, participantsData.length);
    
    // De-duplicate participants by address (same wallet on multiple chains)
    // This matches the pattern: de-dupe participants who are on multiple chains
    const participantWallets = participantsData.reduce((acc, curr) => {
      return acc.includes(curr.address) ? acc : [...acc, curr.address];
    }, []) || [];
    
    console.log(`[fetchOwnersFromBendystraw] Unique participant addresses (owners count):`, participantWallets.length);
    console.log(`[fetchOwnersFromBendystraw] Participant wallets:`, participantWallets);
    
    return participantWallets;
  } catch (error) {
    console.error(`[fetchOwnersFromBendystraw] Error fetching owners for project ${projectId} on chain ${chainId}:`, error);
    return [];
  }
}

// Fetch permission holders (operators) from bendystraw service
// Returns an object with revnetOperator and/or firstOperator
const fetchPermissionHolders = async (projectId, chainId) => {
  try {
    console.log(`[fetchPermissionHolders] Starting - projectId: ${projectId}, chainId: ${chainId}`);
    const url = getBendystrawUrl(chainId);
    console.log(`[fetchPermissionHolders] bendystraw URL: ${url}`);
    
    // GraphQL query for permissionHolders - matching the pattern from the reference image
    const query = `
      query GetPermissionHolders($projectId: Int!, $chainId: Int!) {
        permissionHolders(where: { projectId: $projectId, chainId: $chainId }) {
          items {
            operator
            isRevnetOperator
            chainId
            projectId
          }
        }
      }
    `;
    
    // Convert projectId to integer
    const projectIdInt = parseInt(projectId, 10);
    const variables = { projectId: projectIdInt, chainId };
    console.log(`[fetchPermissionHolders] GraphQL variables:`, variables);
    
    const response = await fetch(`${url}/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query,
        variables
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const result = await response.json();
    console.log(`[fetchPermissionHolders] GraphQL response:`, result);
    
    if (result.errors) {
      console.error(`[fetchPermissionHolders] GraphQL errors:`, result.errors);
      throw new Error(result.errors[0].message);
    }
    
    const permissionHolders = result.data?.permissionHolders?.items || [];
    console.log(`[fetchPermissionHolders] Permission holders:`, permissionHolders);
    
    // Return all operators, with revnetOperator prioritized if it exists
    const allOperators = permissionHolders.map(ph => ph.operator);
    const revnetOperator = permissionHolders.find(ph => ph.isRevnetOperator === true);
    const firstOperator = permissionHolders.length > 0 ? permissionHolders[0].operator : null;
    
    const result_obj = {
      allOperators: allOperators, // All operator addresses from this chain
      revnetOperator: revnetOperator ? revnetOperator.operator : null,
      firstOperator: firstOperator
    };
    
    console.log(`[fetchPermissionHolders] Extracted operators:`, result_obj);
    return result_obj;
  } catch (error) {
    console.error(`[fetchPermissionHolders] Error fetching permission holders for project ${projectId} on chain ${chainId}:`, error);
    return { allOperators: [], revnetOperator: null, firstOperator: null };
  }
}

// Wait for env to be populated with collection addresses
const waitForEnv = async (maxRetries = 10, delayMs = 200) => {
  for (let i = 0; i < maxRetries; i++) {
    // Check if env has at least one collection address
    const hasAddress = env.ethereumMainnetCollectionAddress || 
                       env.optimismMainnetCollectionAddress || 
                       env.arbitrumMainnetCollectionAddress || 
                       env.baseMainnetCollectionAddress ||
                       env.ethereumSepoliaCollectionAddress ||
                       env.optimismSepoliaCollectionAddress ||
                       env.baseSepoliaCollectionAddress ||
                       env.arbitrumSepoliaCollectionAddress;
    
    if (hasAddress) {
      console.log(`[waitForEnv] Env populated after ${i + 1} attempt(s)`);
      return true;
    }
    
    if (i < maxRetries - 1) {
      console.log(`[waitForEnv] Env not ready, waiting ${delayMs}ms (attempt ${i + 1}/${maxRetries})`);
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
  }
  
  console.warn(`[waitForEnv] Env not populated after ${maxRetries} attempts`);
  return false;
}

// Get all collection addresses and their chain IDs from env
const getAllCollectionAddresses = () => {
  console.log(`[getAllCollectionAddresses] env object:`, env);
  const collections = [];
  
  const chainMap = [
    { chainId: 1, address: env.ethereumMainnetCollectionAddress },
    { chainId: 10, address: env.optimismMainnetCollectionAddress },
    { chainId: 42161, address: env.arbitrumMainnetCollectionAddress },
    { chainId: 8453, address: env.baseMainnetCollectionAddress },
    { chainId: 11155111, address: env.ethereumSepoliaCollectionAddress },
    { chainId: 11155420, address: env.optimismSepoliaCollectionAddress },
    { chainId: 84532, address: env.baseSepoliaCollectionAddress },
    { chainId: 421614, address: env.arbitrumSepoliaCollectionAddress }
  ];
  
  console.log(`[getAllCollectionAddresses] Checking chain map:`, chainMap);
  
  chainMap.forEach(chain => {
    if (chain.address && chain.address.trim() !== '') {
      console.log(`[getAllCollectionAddresses] Adding collection - chainId: ${chain.chainId}, address: ${chain.address}`);
      collections.push({
        chainId: chain.chainId,
        collectionAddress: chain.address.trim()
      });
    } else {
      console.log(`[getAllCollectionAddresses] Skipping chain ${chain.chainId} - no address`);
    }
  });
  
  console.log(`[getAllCollectionAddresses] Returning ${collections.length} collections:`, collections);
  return collections;
}

// Aggregate balance and owners across all chains
const aggregateProjectData = async () => {
  console.log(`[aggregateProjectData] Starting aggregation`);
  
  // Wait for env to be populated before proceeding
  await waitForEnv();
  
  const collections = getAllCollectionAddresses();
  
  if (collections.length === 0) {
    console.log('[aggregateProjectData] No collection addresses found');
    return { balance: null, owners: 0 };
  }
  
  // Get project IDs for all collections in parallel
  console.log(`[aggregateProjectData] Getting project IDs for ${collections.length} collections in parallel`);
  const projectIdPromises = collections.map(collection => {
    console.log(`[aggregateProjectData] Creating promise for collection:`, collection);
    return getProjectId(collection.collectionAddress, collection.chainId).then(projectId => ({
      projectId,
      chainId: collection.chainId,
      collectionAddress: collection.collectionAddress
    }));
  });
  
  const projectIdResults = await Promise.all(projectIdPromises);
  console.log(`[aggregateProjectData] Got project ID results:`, projectIdResults);
  
  // Filter out null projectIds
  const projects = projectIdResults.filter(result => result.projectId !== null);
  console.log(`[aggregateProjectData] Collected ${projects.length} valid projects:`, projects);
  
  if (projects.length === 0) {
    console.log('No valid project IDs found');
    return { balance: null, owners: 0 };
  }
  
  // Fetch project data to get token info and suckerGroupId
  console.log(`[aggregateProjectData] Fetching project data for ${projects.length} projects`);
  const projectDataPromises = projects.map(p => {
    console.log(`[aggregateProjectData] Creating promise for projectId: ${p.projectId}, chainId: ${p.chainId}`);
    return fetchProjectFromBendystraw(p.projectId, p.chainId);
  });
  const projectDataArray = await Promise.all(projectDataPromises);
  console.log(`[aggregateProjectData] Received project data:`, projectDataArray);
  
  // Get token info from first project (assuming all projects use same token)
  let tokenInfo = null;
  for (const projectData of projectDataArray) {
    if (projectData && projectData.token) {
      tokenInfo = {
        token: projectData.token,
        symbol: projectData.tokenSymbol || 'ETH',
        decimals: projectData.decimals || 18
      };
      console.log(`[aggregateProjectData] Set tokenInfo:`, tokenInfo);
      break;
    }
  }
  
  // Calculate suckerGroupId from all projects
  // Format: version-projectId-chainId (version is always 5 for Juicebox v5)
  const version = 5;
  const projectIdStrings = projects.map(p => idForProject(version, parseInt(p.projectId, 10), p.chainId));
  console.log(`[aggregateProjectData] Project ID strings:`, projectIdStrings);
  
  const suckerGroupId = idForSuckerGroup(projectIdStrings);
  console.log(`[aggregateProjectData] Calculated suckerGroupId: ${suckerGroupId}`);
  
  // Fetch balance, owners, and operators in parallel since they don't depend on each other
  const firstChainId = projects[0]?.chainId || 1;
  console.log(`[aggregateProjectData] Fetching balance, owners, and operators in parallel`);
  
  // Create all promises in parallel
  const balancePromise = fetchBalanceFromSuckerGroup(suckerGroupId, firstChainId);
  const ownersPromise = fetchOwnersFromBendystraw(null, firstChainId, suckerGroupId);
  const operatorPromises = projects.map(p => {
    console.log(`[aggregateProjectData] Creating operator promise for projectId: ${p.projectId}, chainId: ${p.chainId}`);
    return fetchPermissionHolders(p.projectId, p.chainId);
  });
  
  // Wait for all in parallel
  const [balance, ownerAddresses, ...operatorResults] = await Promise.all([
    balancePromise,
    ownersPromise,
    ...operatorPromises
  ]);
  
  console.log(`[aggregateProjectData] Received balance:`, balance);
  console.log(`[aggregateProjectData] Received owner addresses:`, ownerAddresses);
  console.log(`[aggregateProjectData] Total unique owners:`, ownerAddresses.length);
  console.log(`[aggregateProjectData] Received operator results:`, operatorResults);
  
  // Extract all operators from each chain
  const allOperatorSets = operatorResults.map(or => {
    // Create a set of all operators from this chain (normalized to lowercase)
    const operators = new Set(or.allOperators.map(op => op.toLowerCase()));
    return operators;
  });
  
  console.log(`[aggregateProjectData] All operator sets (normalized):`, allOperatorSets);
  
  // Also track revnetOperators and firstOperators for prioritization
  const revnetOperators = operatorResults.map(or => or.revnetOperator).filter(op => op !== null);
  const firstOperators = operatorResults.map(or => or.firstOperator).filter(op => op !== null);
  
  console.log(`[aggregateProjectData] Revnet operators:`, revnetOperators);
  console.log(`[aggregateProjectData] First operators:`, firstOperators);
  
  let operator = "(n/a)";
  
  // Find the intersection - operators that appear in ALL chains
  if (allOperatorSets.length > 0) {
    // Start with the first set and intersect with all others
    let commonOperators = allOperatorSets[0];
    for (let i = 1; i < allOperatorSets.length; i++) {
      const intersection = new Set();
      for (const op of commonOperators) {
        if (allOperatorSets[i].has(op)) {
          intersection.add(op);
        }
      }
      commonOperators = intersection;
    }
    
    console.log(`[aggregateProjectData] Common operators (normalized):`, Array.from(commonOperators));
    
    if (commonOperators.size > 0) {
      // We have at least one common operator across all chains
      // Prioritize revnetOperator if it's in the common set
      const normalizedRevnetOps = revnetOperators.map(op => op.toLowerCase());
      const commonRevnet = normalizedRevnetOps.find(rop => commonOperators.has(rop));
      
      if (commonRevnet) {
        // Find the original case from revnetOperators
        operator = revnetOperators[normalizedRevnetOps.indexOf(commonRevnet)];
        console.log(`[aggregateProjectData] Found common revnetOperator: ${operator}`);
      } else {
        // Use the first common operator (in original case)
        // Get original case from first chain that has it
        const firstCommonOp = Array.from(commonOperators)[0];
        for (const result of operatorResults) {
          const matchingOp = result.allOperators.find(op => op.toLowerCase() === firstCommonOp);
          if (matchingOp) {
            operator = matchingOp;
            console.log(`[aggregateProjectData] Found common operator: ${operator}`);
            break;
          }
        }
      }
    } else {
      console.log(`[aggregateProjectData] No common operator found across all chains`);
    }
  }
  
  if (operator === "(n/a)") {
    console.log(`[aggregateProjectData] No common operator found, showing (n/a)`);
  }
  
  // Format operator address: try ENS lookup, fallback to abbreviated address
  let formattedOperator = operator;
  if (operator !== "(n/a)" && operator.startsWith("0x")) {
    try {
      formattedOperator = await formatOperatorAddress(operator);
      console.log(`[aggregateProjectData] Formatted operator: ${formattedOperator}`);
    } catch (error) {
      console.error(`[aggregateProjectData] Error formatting operator address:`, error);
      // Fallback to abbreviated address
      formattedOperator = abbreviateAddress(operator);
    }
  }
  
  // Convert balance to BigInt for processing
  const totalBalance = balance ? BigInt(balance) : BigInt(0);
  console.log(`[aggregateProjectData] Total balance:`, totalBalance.toString());
  
  // Owners are already fetched and de-duplicated, just get the count
  const totalOwners = ownerAddresses.length;
  console.log(`[aggregateProjectData] Total owners count: ${totalOwners}`);
  
  // Format balance
  console.log(`[aggregateProjectData] Formatting balance`);
  let formattedBalance = "$0"; // Default to $0 if no balance
  if (tokenInfo && balance && totalBalance > 0n) {
    const divisor = BigInt(10 ** tokenInfo.decimals);
    const balanceNumber = Number(totalBalance) / Number(divisor);
    console.log(`[aggregateProjectData] Balance number: ${balanceNumber}, symbol: ${tokenInfo.symbol}`);
    
    if (tokenInfo.symbol === 'ETH') {
      // Fetch ETH price and convert to USD
      try {
        console.log(`[aggregateProjectData] Fetching ETH price for USD conversion`);
        const ethPriceResponse = await fetch('https://juicebox.money/api/juicebox/prices/ethusd');
        const ethPriceData = await ethPriceResponse.json();
        const ethPrice = ethPriceData.price;
        console.log(`[aggregateProjectData] ETH price: ${ethPrice}`);
        const usdValue = balanceNumber * ethPrice;
        formattedBalance = `$${usdValue.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
        console.log(`[aggregateProjectData] Formatted balance (ETH->USD): ${formattedBalance}`);
      } catch (error) {
        console.error(`[aggregateProjectData] Error fetching ETH price:`, error);
        formattedBalance = `${balanceNumber.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 })} ${tokenInfo.symbol}`;
      }
    } else if (tokenInfo.symbol.toLowerCase().includes('usd') || tokenInfo.symbol === 'USDC' || tokenInfo.symbol === 'USDT' || tokenInfo.symbol === 'DAI') {
      formattedBalance = `$${balanceNumber.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
      console.log(`[aggregateProjectData] Formatted balance (USD token): ${formattedBalance}`);
    } else {
      formattedBalance = `${balanceNumber.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 })} ${tokenInfo.symbol}`;
      console.log(`[aggregateProjectData] Formatted balance (other token): ${formattedBalance}`);
    }
  } else {
    console.log(`[aggregateProjectData] No balance to format - tokenInfo:`, tokenInfo, `totalBalance:`, totalBalance.toString());
  }
  
  // Determine the preferred project link (priority: eth > base > arb > op)
  const chainPriority = [1, 8453, 42161, 10]; // eth, base, arb, op
  const chainPrefixMap = {
    1: 'eth',
    8453: 'base',
    42161: 'arb',
    10: 'op'
  };
  
  let preferredProject = null;
  for (const chainId of chainPriority) {
    const project = projects.find(p => p.chainId === chainId);
    if (project) {
      preferredProject = {
        chainId: project.chainId,
        projectId: project.projectId,
        prefix: chainPrefixMap[chainId]
      };
      console.log(`[aggregateProjectData] Found preferred project:`, preferredProject);
      break;
    }
  }
  
  const revnetUrl = preferredProject 
    ? `https://app.revnet.eth.sucks/v5:${preferredProject.prefix}:${preferredProject.projectId}`
    : null;
  console.log(`[aggregateProjectData] Revnet URL:`, revnetUrl);
  
  const result = {
    balance: formattedBalance,
    owners: totalOwners,
    operator: formattedOperator,
    revnetUrl: revnetUrl
  };
  console.log(`[aggregateProjectData] Final result:`, result);
  return result;
}

// Abbreviate Ethereum address to 0x0000...0000 format
const abbreviateAddress = (address) => {
  if (!address || !address.startsWith("0x") || address.length < 10) {
    return address;
  }
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

// Resolve ENS name for an Ethereum address
// Returns the ENS name if found, otherwise returns null
const resolveENSName = async (address) => {
  try {
    // ENS is only on Ethereum mainnet (chainId 1)
    // Use a public RPC endpoint for ENS resolution
    const mainnetRPC = env?.ethereumMainnetRPC || "https://eth.llamarpc.com";
    const provider = new ethers.JsonRpcProvider(mainnetRPC);
    
    // Reverse lookup: resolve address to ENS name
    const ensName = await provider.lookupAddress(address);
    console.log(`[resolveENSName] Resolved ${address} to ENS name:`, ensName);
    
    if (ensName) {
      // Verify the resolution (forward lookup) to prevent spoofing
      const verifiedAddress = await provider.resolveName(ensName);
      if (verifiedAddress?.toLowerCase() === address.toLowerCase()) {
        return ensName;
      }
    }
    
    return null;
  } catch (error) {
    console.error(`[resolveENSName] Error resolving ENS for ${address}:`, error);
    return null;
  }
}

// Format operator address: try ENS lookup, fallback to abbreviated address
const formatOperatorAddress = async (address) => {
  if (!address || !address.startsWith("0x")) {
    return address;
  }
  
  const ensName = await resolveENSName(address);
  if (ensName) {
    return ensName;
  }
  
  return abbreviateAddress(address);
}

