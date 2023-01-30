// @ts-nocheck

import SauceLabs from "saucelabs";
import AbortController from "abort-controller";
import fetch from "node-fetch";
import url from "node:url";
import { join } from "path";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const wsEndpoint = async ({
  username,
  accesskey,
  proxy,
  logFilePath = join(__dirname, "saucelabs.log"),
  region = 'us-west-1',
  headless = false,
}) => {
  const saucelabs = new SauceLabs({
    username: String(username),
    key: String(accesskey),
    headless,
    region,
    proxy,
    logfile: logFilePath,
  });

  const controller = new AbortController();

  const res = await fetch(saucelabs.webdriverEndpoint, {
    signal: controller.signal,
  });

  const httpStatusCode = res.status;
  const wsEndpointUrl = saucelabs.webdriverEndpoint;

  await controller.abort();

  const endpoint = url.parse(wsEndpointUrl);
  endpoint.auth = `${username}:${accesskey}`;
  endpoint.toString = () => `${endpoint.protocol}//${endpoint.auth}@${endpoint.hostname}${endpoint.path}`.replace(/\/$/, '')

  return {
    httpStatusCode,
    saucelabEndpoint: wsEndpointUrl.replace(/\/$/, ''),
    saucelabEndpointWithAuth: endpoint.toString(),
    saucelabHubEndpoint: `${endpoint.toString()}/wd/hub`,
  };
};

export default wsEndpoint;
