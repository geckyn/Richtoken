const Richtoken = artifacts.require("Richtoken");
var chai = require('chai');
const BN = web3.utils.BN;
var expect = require('chai').expect;

chai.use(require('chai-bn')(BN));

contract("Richtoken", () => {
    let contractInstance;

    const _name = "Rich"
    const _symbol = "RTK"
    const _decimals = "18"

    beforeEach(async () => {
        contractInstance = await Richtoken.new(_name, _symbol, _decimals);
    });
context("token details", async () => {
    it("should have right token name", async () => {
        const name = await contractInstance.name();
        assert.equal(name, "Rich");
    })
    it("should have right symbol", async () => {
        const symbol = await contractInstance.symbol();
        assert.equal(symbol, "RTK");
    })
    it("should have the right decimals", async () => {
        const decimals = await contractInstance.decimals();
        expect(decimals).to.be.a.bignumber.that.equals('18');
     })
})
})