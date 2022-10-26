require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
//https://eth-goerli.g.alchemy.com/v2/8mh1Cx82lBUH5mwuGLKt6p-ipIha-X40
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/8mh1Cx82lBUH5mwuGLKt6p-ipIha-X40",
      accounts: [
        "2afd78d48f2e4c0bf558bd52262a282ed2c170876e15cb37f9d8106fb2ce0eb5",
      ],
    },
  },
};
