import fs from "fs";
import fetch from "node-fetch";

async function getGenesisValidators(): Promise<void> {
  // get Genesis Validators (where block height is 1)
  const height = 1;
  //first 20
  const limit = 20;
  //pagination.reverse is default to false, so it is already in ascending order
  const baseURL = "https://fx-rest.functionx.io";
  const serviceURL = `/cosmos/base/tendermint/v1beta1/validatorsets/${height}?pagination.limit=${limit}`;

  const combinedURL = baseURL + serviceURL;

  try {
    const response = (await fetch(combinedURL)) as any;
    const data = await response.json();

    const genesisValidatorsJSONContent = JSON.stringify(
      data.validators,
      null,
      2
    );

    fs.writeFileSync(
      "genesis-validators.json",
      genesisValidatorsJSONContent,
      "utf8"
    );
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

getGenesisValidators();
