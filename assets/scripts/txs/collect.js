const mint = async (encodedIPFSUri) => {
  const modal = document.getElementById("modal");
  modal.style.display = "block";

  const modalImage = document.getElementById("modal-image");
  const modalVideo = document.getElementById("modal-video");

  modalImage.style.display = "none";
  modalVideo.style.display = "none";

  const modalCaption = document.getElementById("modal-caption");
  const modalLink = document.getElementById("modal-link");
      
  modalCaption.innerHTML = "";
  modalLink.innerHTML = "";

  const mintForm = document.getElementById("mint-form");
  mintForm.style.display = "flex";

  const connectedAddress = (await getSigner()).address;
  const mintBeneficiary = document.getElementById("mint-beneficiary");
  mintBeneficiary.value = connectedAddress;

  const mintQuantity = document.getElementById("mint-quantity");

  const mintCategory = document.getElementById("mint-category");
  const mintProjectID = document.getElementById("mint-project-id");
  const mintPrice = document.getElementById("mint-price");

  const mintButton = document.getElementById("mint-button");
  mintButton.onclick = async () => {
    const projectId = mintProjectID.value || 670;
    const category = mintCategory.value || 2;
    const quantity = parseInt(mintQuantity.value, 10) || 3;
    const price = `${Number(mintPrice.value) * 1_000_000_000_000_000_000}` || "100000000000000000"; // number * 1 ETH, default is 0.1 ETH
    const beneficiary = mintBeneficiary.value;
    
    console.log("Minting with the following parameters:")
    console.log(`Project ID: ${projectId}`);
    console.log(`Category: ${category}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Price: ${price}`);
    console.log(`Encoded IPFS URI: ${encodedIPFSUri}`);
    console.log(`Beneficiary: ${beneficiary}`);

    return await recordAndCollect(projectId, category, quantity, price, encodedIPFSUri, beneficiary);
  }

  const closeButton = document.getElementsByClassName("close")[0];
  closeButton.onclick = () => {
    modal.style.display = "none";
    mintForm.style.display = "none";
  }
}

const recordAndCollect = async (projectId, category, quantity, price, encodedIPFSUri, receiver) => {
    const croptopContract = "0x7183805a74997f32c1f4e2122869b034526ea02a";
    const contractABI = [
    {
      "inputs": [
        {
          "internalType": "contract IJBController3_1",
          "name": "_controller",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_feeProjectId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "INCOMPATIBLE_DATA_SOURCE",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INSUFFICIENT_AMOUNT",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INSUFFICIENT_QUANTITY",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "INVALID_FEE_PERCENT",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UNAUTHORIZED",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UNAUTHORIZED_CATEGORY",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
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
        }
      ],
      "name": "allowedCategoryFor",
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
          "name": "_projectId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "encodedIPFSUri",
              "type": "bytes32"
            },
            {
              "internalType": "uint40",
              "name": "quantity",
              "type": "uint40"
            },
            {
              "internalType": "uint88",
              "name": "price",
              "type": "uint88"
            },
            {
              "internalType": "uint16",
              "name": "category",
              "type": "uint16"
            }
          ],
          "internalType": "struct Post[]",
          "name": "_posts",
          "type": "tuple[]"
        },
        {
          "internalType": "address",
          "name": "_beneficiary",
          "type": "address"
        }
      ],
      "name": "collect",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_projectId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "nft",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "category",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumQuantity",
              "type": "uint256"
            }
          ],
          "internalType": "struct AllowedPost[]",
          "name": "_allowedPosts",
          "type": "tuple[]"
        }
      ],
      "name": "configure",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "controller",
      "outputs": [
        {
          "internalType": "contract IJBController3_1",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeDivisor",
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
      "name": "feeProjectId",
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
          "name": "",
          "type": "uint256"
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
        }
      ],
      "name": "minPostPriceFor",
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
          "name": "",
          "type": "uint256"
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
        }
      ],
      "name": "minPostQuantityFor",
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
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "tierIdForEncodedIPFSUriOf",
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
          "name": "_projectId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_nft",
          "type": "address"
        },
        {
          "internalType": "bytes32[]",
          "name": "_encodedIPFSUris",
          "type": "bytes32[]"
        }
      ],
      "name": "tiersFor",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "contributionFloor",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lockedUntil",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "remainingQuantity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "initialQuantity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "votingUnits",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reservedRate",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "reservedTokenBeneficiary",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "royaltyRate",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "royaltyBeneficiary",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "encodedIPFSUri",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "category",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "allowManualMint",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "transfersPausable",
              "type": "bool"
            }
          ],
          "internalType": "struct JB721Tier[]",
          "name": "tiers",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

  const beneficiary = receiver || (await getSigner()).address;

  const bigIntPrice = BigInt(price);
  const post = {quantity, price: bigIntPrice, category, encodedIPFSUri};
  const divisor = BigInt("20");
  return await sign(croptopContract, contractABI, "collect", [projectId, [post], beneficiary, {
      value: bigIntPrice + (bigIntPrice / divisor) 
  }]);
}
