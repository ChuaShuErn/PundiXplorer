// SPDX-License-Identifier: MIT
pragma solidity 0.8.21;

import {Script, console2} from "forge-std/Script.sol";
import {PundiXToken} from "../src/PundiXToken.sol";

contract PundiXTokenScript is Script {
    function setUp() public {}

    function run() public {
        //get private key
        uint256 privateKey = vm.envUint("DEV_PRIVATE_KEY");
        address deployer = vm.addr(privateKey);
        console2.log("Deployer:", deployer);
        vm.startBroadcast(privateKey);
        //Deploy Token Contract
        PundiXToken token = new PundiXToken();
        console2.log("Token Contract Address:", address(token));
        //Mint
        //Mint some tokens to 0x34846BF00C64A56A5FB10a9EE7717aBC7887FEdf
        address evaluator = 0x34846BF00C64A56A5FB10a9EE7717aBC7887FEdf;
        address myself = 0xE842987E5078a20bA7235865a90257F62fa63674;
        //
        token.mint(evaluator, 1e19);
        token.mint(myself, 1e19);
        vm.stopBroadcast();
    }
}

// forge script script/PundiXToken.s.sol:PundiXTokenScript --rpc-url $RPC_URL --legacy
