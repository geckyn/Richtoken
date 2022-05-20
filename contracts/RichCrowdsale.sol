// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

import "@openzeppelin/contracts/crowdsale/emission/MintedCrowdsale.sol";

contract RichCrowdsale is Crowdsale, MintedCrowdsale {
    constructor(
        uint256 rate,
        address payable wallet,
        IERC20 token
    )

        MintedCrowdsale()
        Crowdsale(rate, wallet, token)
        public
    {

    }
}