import { Constants } from "expo";

const ENV = {
  dev: {
    apiUrl: "https://pro-api.coinmarketcap.com",
    apiSecret: "9349585e-0b86-4c2b-ab72-bfbf68f18119"
  },
  staging: {
    apiUrl: "https://pro-api.coinmarketcap.com",
    apiSecret: "9349585e-0b86-4c2b-ab72-bfbf68f18119"
  },
  prod: {
    apiUrl: "https://pro-api.coinmarketcap.com",
    apiSecret: "9349585e-0b86-4c2b-ab72-bfbf68f18119"
  }
};

function getEnvVars(env: string = "") {
  if (env.indexOf("dev") !== -1) return ENV.dev;
  if (env.indexOf("staging") !== -1) return ENV.staging;
  if (env.indexOf("prod") !== -1) return ENV.prod;
  return ENV.dev;
}

export default getEnvVars(Constants.manifest.releaseChannel);
