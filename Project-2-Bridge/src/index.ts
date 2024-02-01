/* eslint-disable-next-line no-unused-vars */
import { createObjectCsvWriter } from "csv-writer";
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

// Use Alchemy API key
const alchemyApiKey = process.env.ALCHEMY_API_KEY;

// This abi will be used to query token balances
const erc20Abi = ["function balanceOf(address) view returns (uint256)"];

// mainnet
const network = "homestead";

// Alchemy Provider
const provider = new AlchemyProvider(network, alchemyApiKey);

//prepare csv headers and file name
const csvWriter = createObjectCsvWriter({
  path: "fx-bridge-token-supply.csv",
  header: [
    { id: "address", title: "Token Contract Address" },
    { id: "name", title: "Name" },
    { id: "symbol", title: "Symbol" },
    { id: "decimals", title: "DECIMALS" },
    {
      id: "balance",
      title: "Locked Supply",
    },
    {
      id: "lastQueriedTimestamp",
      title: "Last Queried Timestamp",
    },
    {
      id: "blockHeight",
      title: "Block Height",
    },
    {
      id: "runNumber",
      title: "Run Number",
    },
  ],
});

// Query once with a 5 second interval for 1 minute
const secondsAfterEachRun = 5; // 5 seconds
const durationOfQuery = 60; // 60 seconds

// Derive number of runs
const numberOfRuns = durationOfQuery / secondsAfterEachRun;

//Main Function to query
async function main(runNumber: number) {
  // Query Bridge
  const bridgeProxyContractInstance = new ethers.Contract(
    bridgeProxyContractCA,
    bridgeImplementationContractABI,
    provider
  );

  const tokenList: TokenList =
    await bridgeProxyContractInstance.getBridgeTokenList();

  const csvRecords = [];
  for (let i = 0; i < tokenList.length; i++) {
    const tokenAddress = tokenList[i][0];
    const tokenName = tokenList[i][1];
    const symbol = tokenList[i][2];
    const decimals = tokenList[i][3];
    const tokenBalance = await getTokenBalanceOfProxyContract(tokenAddress);
    const balance = ethers.formatUnits(tokenBalance, decimals);
    const timestamp = Math.floor(Date.now() / 1000);
    const latestBlockNumber = await provider.getBlockNumber();

    csvRecords.push({
      address: tokenAddress,
      name: tokenName,
      symbol: symbol,
      decimals: decimals,
      balance: balance,
      lastQueriedTimestamp: timestamp,
      blockHeight: latestBlockNumber,
      runNumber: runNumber,
    });
  }

  //write records
  csvWriter.writeRecords(csvRecords);
}

//get Token Balance for each token the bridge holds
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

// Entry point to query
function runScript(runsLeft: number) {
  if (runsLeft == 0) {
    console.log("Finished");
    return;
  }
  const runNumber = numberOfRuns - runsLeft + 1;
  console.log("Run Number: ", runNumber);
  main(runNumber).then(() => {
    setTimeout(() => runScript(runsLeft - 1), 5000);
  });
}

//Run script
runScript(numberOfRuns);
