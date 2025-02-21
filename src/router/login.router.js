// @license Apache-2.0
// @copyright Payal Yadav

import express from "express";
// custom modules
import login from "../controller/login.controller.js";

const router = express.Router();

router.route("/").get(login);

export default router;
