// @license Apache-2.0
// @copyright Payal Yadav

import express from "express";
import index from "../controller/index.controller.js";

router.route("/").get(index);

const router = express.Router();

export default router;
