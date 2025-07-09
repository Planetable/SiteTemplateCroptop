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
    case 1: return "Ethereum Mainnet"; 
    case 10: return "Optimism Mainnet"; 
    case 8453: return "Base Mainnet"; 
    case 42161: return "Arbitrum Mainnet"; 
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

