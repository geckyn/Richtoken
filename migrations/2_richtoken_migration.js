const Richtoken = artifacts.require("Richtoken");

module.exports = function (deployer) {
  const _name = "Richtoken"
  const _symbol = "RTK"
  const _decimals = "18"
  deployer.deploy(Richtoken, _name, _symbol, _decimals);
};
