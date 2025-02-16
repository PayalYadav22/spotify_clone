// @license Apache-2.0
// @copyright Payal Yadav

import express from "express";
import auth from "../controller/auth.controller.js";

const router = express.Router();

router.route("/").get(auth);

export default router;
