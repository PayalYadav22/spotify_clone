// @license Apache-2.0
// @copyright Payal Yadav

import express from "express";
import authenticated from "../controller/auth.controller.js";
import { refreshToken } from "../controller/refresh.token.controller.js";

const router = express.Router();

router.route("/").get(authenticated.auth);

router.route("/callback").get(authenticated.authentication);

router.route("/refresh_token").get(refreshToken);

export default router;
