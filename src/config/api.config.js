// @license Apache-2.0
// @copyright Payal Yadav

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const baseUri = process.env.BASE_URI;
const tokenBaseUri = process.env.TOKEN_BASE_URI;
const redirectUri = process.env.REDIRECT_URI;
const scopes = process.env.SCOPES;

const stateKey = "spotify_auth_state";

const market = "US";
const lowLimit = 12;
const defaultLimit = 28;

export default {
  clientId,
  clientSecret,
  baseUri,
  tokenBaseUri,
  redirectUri,
  scopes,
  stateKey,
  market,
  lowLimit,
  defaultLimit,
};
