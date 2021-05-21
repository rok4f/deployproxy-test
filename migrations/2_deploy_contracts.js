const { deployProxy } = require('@openzeppelin/truffle-upgrades');
//const ConvertLib = artifacts.require("ConvertLib");
//const MetaCoin = artifacts.require("MetaCoin");
const NestGovernance = artifacts.require("NestGovernance");

module.exports = async function(deployer) {
  //deployer.deploy(ConvertLib);
  //deployer.link(ConvertLib, MetaCoin);
  //deployer.deploy(MetaCoin);
  //console.log(accounts[0]);
  const proxy = await deployProxy(NestGovernance, ['0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000'], { deployer, initializer: 'initialize' });
  console.log("Deployed", proxy.address);
};
