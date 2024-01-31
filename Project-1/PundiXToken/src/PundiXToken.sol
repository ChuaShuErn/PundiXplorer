// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @dev this contract is purely for demonstration purposes
 */
contract PundiXToken is ERC20 {
    constructor() ERC20("PundiXToken", "PDXT") {}

    function mint(address account, uint256 value) external {
        _mint(account, value);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}
