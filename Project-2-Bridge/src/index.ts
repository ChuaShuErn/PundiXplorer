/* eslint-disable-next-line no-unused-vars */
import "dotenv/config";
import { AlchemyProvider, ethers } from "ethers";
import bridgeImplementationContractABI from "../src/bridgeImplementationContractABI.js";

// Proxy Contract
// CA: "0x6f1D09Fed11115d65E1071CD2109eDb300D80A27"
// This is the contract that holds the state (token balance, owner, etc)
const bridgeProxyContractCA = "0x6f1D09Fed11115d65E1071CD2109eDb300D80A27";
// Implementation Contract
// CA : "0x12F4B7020b4694F1971479157A3a77106018809B"
// This is the contract that holds the logic, but no state
// ABI should match the Implementation Contract's functions
const alchemyApiKey = process.env.ALCHEMY_API_KEY;
// mainnet
const network = "homestead";

async function main() {
  const provider = new AlchemyProvider(network, alchemyApiKey);
  const bridgeProxyContractInstance = new ethers.Contract(
    bridgeProxyContractCA,
    bridgeImplementationContractABI,
    provider
  );
  const ownerAddress = await bridgeProxyContractInstance.owner();
  const tokenList: TokenList =
    await bridgeProxyContractInstance.getBridgeTokenList();
  console.log("owner:", ownerAddress);
  console.log("TokenList", tokenList);
}
main();
