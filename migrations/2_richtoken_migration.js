const Richtoken = artifacts.require("Richtoken");

module.exports = function (deployer) {
  deployer.deploy(Richtoken);
};
