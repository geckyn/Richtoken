const Richtoken = artifacts.require("Richtoken");
const RichCrowdsale = artifacts.require("RichCrowdsale");
const { assert } = require('chai');
var chai = require('chai');
const BN = web3.utils.BN;
var expect = require('chai').expect;

chai.use(require('chai-bn')(BN));

contract("RichCrowdsale", (accounts) => {
    const [ deployer, wallet, investor1, investor2 ] = accounts;
    let tokenInstance;
    let crowdsaleInstance;

    // Token details
    const _name = "Rich";
    const _symbol = "RTK";
    const _decimals = "18";

    //crowdsale details
    const rate = new BN('200000000');

    beforeEach(async () => {
        tokenInstance = await Richtoken.new(_name, _symbol, _decimals, {from: deployer});
        crowdsaleInstance = await RichCrowdsale.new(rate, wallet, tokenInstance.address);
    });
context("Crowdsale details", async () => {
    it("should have correct rate", async () => {
        const rate = await crowdsaleInstance.rate();
        expect(rate).to.be.a.bignumber.that.equals('200000000');
    })
    it("should use the right wallet", async () => {
        const wallet = await crowdsaleInstance.wallet();
        assert.equal(wallet, accounts[1]);
    })
    it("should track the right token", async () => {
        const token = await crowdsaleInstance.token();
        assert.equal(token, tokenInstance.address);
    })
})
context("Mintable behaviour", async () => {
    it("should not be able to mint by default", async () => {
        assert.equal(await tokenInstance.isMinter(crowdsaleInstance.address), false);
    })
    it("should be able to mint only when granted", async () => {
        await tokenInstance.addMinter(crowdsaleInstance.address);
        assert.equal(await tokenInstance.isMinter(crowdsaleInstance.address), true);
    })
})
})