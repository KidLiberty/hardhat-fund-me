require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("./tasks/blockNumber")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL =
    process.env.GOERLI_RPC_URL || "https://eth-goerli/example"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key"

module.exports = {
    defaultNetwork: "hardhat",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
        token: "MATIC"
    },
    namedAccounts: {
        deployer: {
            default: 0
        },
        user: {
            default: 1
        }
    },
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            // accounts: Thanks HardHat!
            chainId: 31337
        }
    },
    // solidity: "0.8.7", // make sure this is the same version as your contract
    solidity: {
        compilers: [{ version: "0.8.7" }, { version: "0.6.6" }]
    }
}
