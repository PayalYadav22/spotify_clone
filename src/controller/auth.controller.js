// @license Apache-2.0
// @copyright Payal Yadav

import queryString from "query-string";
import { generateRandomString } from "../utils/helper.utils.js";
import apiConfig from "../config/api.config.js";
import { getToken } from "../api/auth.api.js";

const scope = [
  "user-read-private",
  "user-read-email",
  "playlist-read-private",
  "streaming",
  "user-library-read",
  "user-library-modify",
  "user-read-playback-state",
  "user-modify-playback-state",
].join(" ");

const auth = (req, res) => {
  const state = generateRandomString(16);
  res.cookie(apiConfig.stateKey, state);

  const queryParams = queryString.stringify({
    response_type: "code",
    client_id: apiConfig.clientId,
    client_secret: apiConfig.clientSecret,
    redirect_uri: apiConfig.redirectUri,
    scope: scope,
    state,
  });

  const authUrl = `${process.env.AUTH_URI}authorize?${queryParams}`;
  res.redirect(authUrl);
};

const authentication = async (req, res) => {
  const miliSecond = 1000;
  const oneWeek = 604800000;
  const { code = null, state = null, error = null } = req.query;
  const /** {string} */ storedState = req.cookies[apiConfig.stateKey];
  console.log(storedState === state);
  if (error || !state || state != storedState) {
    return res.redirect("/login");
  } else {
    res.clearCookie(apiConfig.stateKey);
    const response = await getToken(code);
    if (response.status === 200) {
      if (response.data) {
        const { access_token, expires_in, refresh_token } = response.data;
        res.cookie("access_token", access_token, {
          maxAge: expires_in * miliSecond,
        });
        res.cookie("refresh_token", refresh_token, {
          maxAge: expires_in * oneWeek,
        });
        res.redirect("/");
      }
    } else {
      res.redirect("/login");
    }
  }
};

export default { auth, authentication };
