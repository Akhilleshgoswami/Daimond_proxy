const { ethers } = require("hardhat");
const { FacetCutAction } = require("./libraries/diamond");

  const getSelectors = (contract) => {
    const signatures = Object.keys(contract.interface.functions);
    return signatures.reduce((acc, val) => {
        if (val !== 'init(bytes)') {
            acc.push(contract.interface.getSighash(val));
        }
        return acc;
    }, []);
};
async function FuncUpdate () {
    
const  DiamondCutFacetABI = [
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "_selector",
          "type": "bytes4"
        }
      ],
      "name": "CannotAddFunctionToDiamondThatAlreadyExists",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4[]",
          "name": "_selectors",
          "type": "bytes4[]"
        }
      ],
      "name": "CannotAddSelectorsToZeroAddress",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "_selector",
          "type": "bytes4"
        }
      ],
      "name": "CannotRemoveFunctionThatDoesNotExist",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "_selector",
          "type": "bytes4"
        }
      ],
      "name": "CannotRemoveImmutableFunction",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "_selector",
          "type": "bytes4"
        }
      ],
      "name": "CannotReplaceFunctionThatDoesNotExists",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "_selector",
          "type": "bytes4"
        }
      ],
      "name": "CannotReplaceFunctionWithTheSameFunctionFromTheSameFacet",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4[]",
          "name": "_selectors",
          "type": "bytes4[]"
        }
      ],
      "name": "CannotReplaceFunctionsFromFacetWithZeroAddress",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "_selector",
          "type": "bytes4"
        }
      ],
      "name": "CannotReplaceImmutableFunction",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "_action",
          "type": "uint8"
        }
      ],
      "name": "IncorrectFacetCutAction",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_initializationContractAddress",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_calldata",
          "type": "bytes"
        }
      ],
      "name": "InitializationFunctionReverted",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_contractAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_message",
          "type": "string"
        }
      ],
      "name": "NoBytecodeAtAddress",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_facetAddress",
          "type": "address"
        }
      ],
      "name": "NoSelectorsProvidedForFacetForCut",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_contractOwner",
          "type": "address"
        }
      ],
      "name": "NotContractOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_facetAddress",
          "type": "address"
        }
      ],
      "name": "RemoveFacetAddressMustBeZeroAddress",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "facetAddress",
              "type": "address"
            },
            {
              "internalType": "enum IDiamond.FacetCutAction",
              "name": "action",
              "type": "uint8"
            },
            {
              "internalType": "bytes4[]",
              "name": "functionSelectors",
              "type": "bytes4[]"
            }
          ],
          "indexed": false,
          "internalType": "struct IDiamond.FacetCut[]",
          "name": "_diamondCut",
          "type": "tuple[]"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_init",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "_calldata",
          "type": "bytes"
        }
      ],
      "name": "DiamondCut",
      "type": "event"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "facetAddress",
              "type": "address"
            },
            {
              "internalType": "enum IDiamond.FacetCutAction",
              "name": "action",
              "type": "uint8"
            },
            {
              "internalType": "bytes4[]",
              "name": "functionSelectors",
              "type": "bytes4[]"
            }
          ],
          "internalType": "struct IDiamond.FacetCut[]",
          "name": "_diamondCut",
          "type": "tuple[]"
        },
        {
          "internalType": "address",
          "name": "_init",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_calldata",
          "type": "bytes"
        }
      ],
      "name": "diamondCut",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
const DiamondLoupeFacetABI = [
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "_functionSelector",
          "type": "bytes4"
        }
      ],
      "name": "facetAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "facetAddress_",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "facetAddresses",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "facetAddresses_",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_facet",
          "type": "address"
        }
      ],
      "name": "facetFunctionSelectors",
      "outputs": [
        {
          "internalType": "bytes4[]",
          "name": "_facetFunctionSelectors",
          "type": "bytes4[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "facets",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "facetAddress",
              "type": "address"
            },
            {
              "internalType": "bytes4[]",
              "name": "functionSelectors",
              "type": "bytes4[]"
            }
          ],
          "internalType": "struct IDiamondLoupe.Facet[]",
          "name": "facets_",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "_interfaceId",
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
    }
  ]
    // Assuming you have the necessary provider and signer instantiated
    
    // Functions to keep in the new facet
    const functionsToKeep = [
        'getNum()', 'setNum(uint256)', 'getRoleAdmin(bytes32)',
        'getRoleMember(bytes32,uint256)', 'getRoleMemberCount(bytes32)',
        'grantRole(bytes32,address)', 'hasRole(bytes32,address)',
        "renounceRole(bytes32)", "revokeRole(bytes32,address)",
        'getAdmin()'
    ];
    const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.infura.io/v3/6444666b26d5471aba31c77934f79464');
    // Get the contract factories and addresses
    const NewContract = await ethers.getContractFactory("NewA");
    const newContract = await NewContract.deploy();
    await newContract.deployed();

    const newContractAddress = newContract.address;
    console.log("deployed address",newContractAddress)
    const SEPOLIA_PRIVATE_KEY = "ba7a44643aa5c0e1fd70226c0f67cbce09358d92db9a7093af35104b41bad356";
    const wallet = new ethers.Wallet(SEPOLIA_PRIVATE_KEY, provider);
    // Get the selectors to remove

    
    const selectorsToRemove = getSelectors(newContract).filter(selector => !functionsToKeep.includes(selector));;
    
    // Instantiate the DiamondCutFacet and DiamondLoupeFacet with the relevant contract addresses
    const diamondCutFacetAddress = "0xE6B403C86952d9d3f6697ff3f2C8398852c828Bd"; // Replace with actual address
    const diamondLoupeFacetAddress = "0xE6B403C86952d9d3f6697ff3f2C8398852c828Bd"; // Replace with actual address
    
    const diamondCutFacet = new ethers.Contract(diamondCutFacetAddress, DiamondCutFacetABI, wallet); // Replace DiamondCutFacetABI with actual ABI
    const diamondLoupeFacet = new ethers.Contract(diamondLoupeFacetAddress, DiamondLoupeFacetABI, wallet); // Replace DiamondLoupeFacetABI with actual ABI
    console.log(selectorsToRemove)
    // Perform the diamond cut to add the new facet
    // const tx = await diamondCutFacet.diamondCut(
    //     [{
    //         facetAddress: newContractAddress,
    //         action: FacetCutAction.Add,
    //         functionSelectors: selectorsToRemove
    //     }],
    //     ethers.constants.AddressZero,
    //     '0x',
    //     { gasLimit: 100000000 }
    // );
    
    // const receipt = await tx.wait();
    // if (!receipt.status) {
    //     throw Error(`Diamond upgrade failed: ${tx.hash}`);
    // }
    
    // Check if the selectors were successfully added
    // const result = await diamondLoupeFacet.facetFunctionSelectors(newContractAddress);
    // console.log(result); // This will display the updated list of selectors in the new facet
    
}
if (require.main === module) {
    FuncUpdate()
      .then(() => process.exit(0))
      .catch(error => {
        console.error(error)
        process.exit(1)
      })
  }