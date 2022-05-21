// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Pausable.sol";

contract Richtoken is ERC20Mintable, ERC20Detailed, ERC20Pausable {
    constructor()
    ERC20Detailed("Rich", "RTK", 18) public {
    }
}