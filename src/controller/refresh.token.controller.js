// @license Apache-2.0
// @copyright Payal Yadav

import { getRefreshToken } from "../api/refresh.token.api.js";

const refreshToken = async (req, res) => {
  const miliSecond = 1000;
  const response = await getRefreshToken(req.cookies.refresh_token);
  if (response.status === 200) {
    const { access_token, expires_in, refresh_token } = response.data;
    res.cookie("access_token", access_token, {
      maxAge: expires_in * miliSecond,
    });
    res.redirect(req.query.redirect);
  } else {
    res.redirect("/login");
  }
};

export { refreshToken };
