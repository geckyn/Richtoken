const Richtoken = artifacts.require("Richtoken");
const RichCrowdsale = artifacts.require("RichCrowdsale");

module.exports = async function (deployer, accounts) {
  const _name = "Richtoken";
  const _symbol = "RTK";
  const _decimals = "18";

  await deployer.deploy(Richtoken, _name, _symbol, _decimals);
  const deployedToken = await Richtoken.deployed();

  //crowdsale details
  const rate = "200000000";
  const wallet = "0xA47D83D9592D9Dd6d90713d76af00722c8eceed4"; //random address
  const token = deployedToken.address;

  await deployer.deploy(RichCrowdsale, rate, wallet, token);
  const deployedCrowdsale = await RichCrowdsale.deployed();

  await deployedToken.addMinter(deployedCrowdsale.address);
  await deployedToken.renounceMinter();
};
