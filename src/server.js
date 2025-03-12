// const express = require("express");
import express from "express";
import userRouter from "./routers/userRouter.js";
import propertyRouter from "./routers/propertyRouter.js";

const app = express();
const port = 3000;
app.use(express.json());

app.use("/user", userRouter);
app.use("/property", propertyRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Bem-vindo(a)!"
  });
});

app.listen(port, () => {
  console.log(`Servidor online: http://localhost:${port}`);
});
