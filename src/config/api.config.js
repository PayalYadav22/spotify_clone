// @license Apache-2.0
// @copyright Payal Yadav

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const authUri = process.env.AUTH_URI;
const redirectUri = process.env.REDIRECT_URI;
const apiUri = process.env.API_URI;

const stateKey = "spotify_auth_state";

const market = "US";
const lowLimit = 12;
const defaultLimit = 28;

export default {
  clientId,
  clientSecret,
  authUri,
  redirectUri,
  apiUri,
  stateKey,
  market,
  lowLimit,
  defaultLimit,
};
