// Server creation
// 1 - Require express
// 2 - Associate express methods to a variabel
// 3 - Create PORT
// 4 - Listen to PORT

// always in top level
require("dotenv").config({ path: "./config/.env" });

const express = require("express");
const connectDB = require("./config/connectDB");
const auth = require("./routes/auth");

// Associate express methods to the variabel app
const app = express();

//Parse data
app.use(express.json());

// Data base Connection
connectDB();

//Create endpoints
app.use("/api/auth", auth);

// Listen to port and run server
app.listen(process.env.PORT || process.env.port, (err) => {
  err
    ? console.log(`Server connection failed`)
    : console.log(`Server connected successfully on port ${process.env.PORT}`);
});
