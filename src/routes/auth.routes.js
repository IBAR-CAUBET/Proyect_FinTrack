const express = require("express");
const authRouter = express.Router();
const { authController, authControllerByMiddelware } = require("../controllers/auth.controller");
const validateToken = require("../utils/validateToken");

// Login de user (loguearse en la cuenta)
authRouter.post(
  "/login",
  authController
);

// Login de user a través de session abierta (validada por un token)
authRouter.get("/session", validateToken, authControllerByMiddelware);

module.exports = authRouter;
