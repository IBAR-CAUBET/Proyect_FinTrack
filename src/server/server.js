const express = require("express");
require("dotenv").config();
const cors = require("cors");
/***EXPORTACION DE ROUTERS******/
const userRouter = require("../routes/user.routes");
const assetRouter = require("../routes/asset.routes");
const movementRouter = require("../routes/movement.routes");
const authRouter = require("../routes/auth.routes");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
/*****USAR ROUTERS CON APP.USE()*****/
app.use("/user", userRouter);
app.use("/assets", assetRouter);
app.use("/movements", movementRouter);
app.use("/auth", authRouter);

module.exports = app;
