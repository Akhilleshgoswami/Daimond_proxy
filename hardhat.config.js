
/* global ethers task */
require('@nomiclabs/hardhat-waffle')
require("hardhat-gas-reporter");
require("@nomicfoundation/hardhat-verify");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})
// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
const INFURA_API_KEY = "KEY";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = "";
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.17',
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    hardhat:{

      
        forking:{
  
          url:"https://polygon-mumbai.infura.io/v3/",
        
        // url:"https://optimism-goerli.infura.io/v3/2dff452478174fdf8035dc20eadb5667"
        }
      },
     
    sepolia: {
      url: `https://polygon-mumbai.infura.io/v3/`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },},
  etherscan: {
    apiKey: "5X7RCYR6RRW3UZAU3S8JXJCHHBP5HGIYH5",
  },

  gasReporter: {
    enabled: true
  }
}
