import { createObjectCsvWriter } from "csv-writer";
import Decimal from "decimal.js";
import fetch from "node-fetch";
import {
  CommissionResponse,
  OutstandingRewardsResponse,
  ValidatorResponse,
} from "./types/Validator";

const csvWriter = createObjectCsvWriter({
  path: "cumulative-earnings.csv",
  header: [
    { id: "address", title: "Validator Address" },
    { id: "moniker", title: "Validator Moniker" },
    { id: "commission", title: "Commission" },
    { id: "outstandingRewards", title: "Outstanding Rewards" },
    {
      id: "cumulativeEarnings",
      title: "Cumulative Earnings",
    },
  ],
});

const baseURL = "https://fx-rest.functionx.io";
async function getValidatorsCumulativeEarnings(): Promise<void> {
  // Validators queries all validators that match the given status
  const serviceURL = `/cosmos/staking/v1beta1/validators`;

  const combinedURL = baseURL + serviceURL;
  const csvRecords = [];

  try {
    const response = await fetch(combinedURL);
    const data = (await response.json()) as ValidatorResponse;

    const validators = data.validators;

    for (let i = 0; i < validators.length; i++) {
      // console.log(data.validators[i].commission);
      const validatorAddress = validators[i].operator_address;
      const validatorMoniker = validators[i].description.moniker;
      // console.log(data.validators[i].description);
      const commission = (await getAccumulatedCommissionByValidatorAddress(
        validatorAddress
      )) as CommissionResponse;

      const outstandingReward = (await getOutstandingRewardsByValidatorAddress(
        validatorAddress
      )) as OutstandingRewardsResponse;
      // console.log("for address", validatorAddress);
      // console.log(
      //   "comission:",
      //   JSON.stringify(commission?.commission, null, 2)
      // );
      // console.log(
      //   "outstanding reward:",
      //   JSON.stringify(outstandingReward.rewards, null, 2)
      // );
      const commissionValue =
        commission?.commission?.commission[0]?.amount || "0";
      const outstandingRewardValue =
        outstandingReward.rewards?.rewards?.[0]?.amount || "0";

      const cumulativeEarnings = returnCumulativeEarnings(
        outstandingRewardValue,
        commissionValue
      );
      csvRecords.push({
        address: validatorAddress,
        moniker: validatorMoniker,
        commission: commissionValue,
        outstandingRewards: outstandingRewardValue,
        cumulativeEarnings: cumulativeEarnings,
      });
    }
    csvWriter.writeRecords(csvRecords);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

// Function to get ValidatorComission Queries accumulated Comission for a validator

async function getAccumulatedCommissionByValidatorAddress(
  validatorAddress: string
) {
  const getURL = `/cosmos/distribution/v1beta1/validators/${validatorAddress}/commission`;
  const combinedURL = baseURL + getURL;

  try {
    const response = await fetch(combinedURL);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching Accumulated Commission data:", error);
  }
}
// Function to get ValidatorOutstanding Rewards of a validator address
async function getOutstandingRewardsByValidatorAddress(
  validatorAddress: string
) {
  const getURL = `/cosmos/distribution/v1beta1/validators/${validatorAddress}/outstanding_rewards`;
  const combinedURL = baseURL + getURL;
  try {
    const response = await fetch(combinedURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Outstanding Rewards data:", error);
  }
}

function returnCumulativeEarnings(
  outstandingReward: string,
  commissionAmount: string
) {
  let outstandingRewardBN = new Decimal(outstandingReward);
  let commissionAmountBN = new Decimal(commissionAmount);

  return outstandingRewardBN.plus(commissionAmountBN).toString();
}

getValidatorsCumulativeEarnings();
