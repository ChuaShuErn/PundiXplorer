/* eslint-disable-next-line no-unused-vars */
import { createObjectCsvWriter } from "csv-writer";
import "dotenv/config";
import { AlchemyProvider, ethers } from "ethers";
import bridgeImplementationContractABI from "../src/bridgeImplementationContractABI.js";

// Proxy Contract
// CA: "0x6f1D09Fed11115d65E1071CD2109eDb300D80A27"
// This is the contract that holds the state (token balance, owner, etc)
const bridgeProxyContractCA = "0x6f1D09Fed11115d65E1071CD2109eDb300D80A27";
const erc20Abi = ["function balanceOf(address) view returns (uint256)"];
// Implementation Contract
// CA : "0x12F4B7020b4694F1971479157A3a77106018809B"
// This is the contract that holds the logic, but no state
// ABI should match the Implementation Contract's functions
const alchemyApiKey = process.env.ALCHEMY_API_KEY;
// mainnet
const network = "homestead";
const provider = new AlchemyProvider(network, alchemyApiKey);

const csvWriter = createObjectCsvWriter({
  path: "tokenList.csv",
  header: [
    { id: "address", title: "ADDRESS" },
    { id: "name", title: "NAME" },
    { id: "symbol", title: "SYMBOL" },
    { id: "decimals", title: "DECIMALS" },
    {
      id: "balance",
      title: "BALANCE",
    },
  ],
});

async function main() {
  // Query Bridge

  const bridgeProxyContractInstance = new ethers.Contract(
    bridgeProxyContractCA,
    bridgeImplementationContractABI,
    provider
  );
  const ownerAddress = await bridgeProxyContractInstance.owner();
  const tokenList: TokenList =
    await bridgeProxyContractInstance.getBridgeTokenList();
  console.log("owner:", ownerAddress);
  //   console.log("TokenList", tokenList);
  console.log("tokenList.length:", tokenList.length);
  const csvRecords = [];
  for (let i = 0; i < tokenList.length; i++) {
    const tokenAddress = tokenList[i][0];
    const tokenName = tokenList[i][1];
    const symbol = tokenList[i][2];
    const decimals = tokenList[i][3];
    const tokenBalance = await getTokenBalanceOfProxyContract(tokenAddress);
    const balance = ethers.formatUnits(tokenBalance, decimals);

    csvRecords.push({
      address: tokenAddress,
      name: tokenName,
      symbol: symbol,
      decimals: decimals,
      balance: balance,
    });
  }
  csvWriter.writeRecords(csvRecords);
}

async function getTokenBalanceOfProxyContract(
  tokenContractAddress: string
): Promise<bigint> {
  const tokenContractInstance = new ethers.Contract(
    tokenContractAddress,
    erc20Abi,
    provider
  );
  const tokenBalance = await tokenContractInstance.balanceOf(
    bridgeProxyContractCA
  );
  return tokenBalance;
}

main();
