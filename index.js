// @license Apache-2.0
// @copyright Payal Yadav

// node modules
import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config({
  path: "./env",
});

app.listen(process.env.PORT || 5000, () => {
  console.error(
    `Server is running at port http://localhost:${process.env.PORT || 5000}`
  );
});
