// @license Apache-2.0
// @copyright Payal Yadav

// node modules
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import cors from "cors";
import login from "../src/router/login.router.js";

const app = express();

// ejs setting
app.set("view engine", "ejs");

// setting static directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set views directory
app.set("views", path.join(__dirname, "../views"));

// enable cors & cookies parser
app.use(cors());
app.use(cookieParser());

// login page
app.use("/login", login);

// Initial express
export default app;
