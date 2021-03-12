const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

//require("dotenv").config(".env");
const express = require("express");
const app = express();
const userRouter = require("./src/router/user");
const loginRouter = require("./src/router/login");

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);

app.listen(process.env.APPS_PORT, ()=>{
    console.log("Server Running at", process.env.APPS_PORT);
})