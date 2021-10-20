import {getConfigValue} from '@ijl/cli';

const apiPath = getConfigValue('innoreact.api');

export const API_URLS = {
  yandexMapsUrl: `${apiPath}/get-map-info`,
  pricesUrl: `${apiPath}/get-prices`,
  login: `${apiPath}/auth/login`,
  registration: `${apiPath}/auth/registration`,
};
