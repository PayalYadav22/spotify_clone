// @license Apache-2.0
// @copyright Payal Yadav

import { getProfile } from "../api/user.api.js";

const index = async (req, res) => {
  // current user profile
  const currentProfile = await getProfile(req);

  res.render("./pages/index", { currentProfile });
};

export default index;
