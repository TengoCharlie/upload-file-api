import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
const app = express();

import route from "./src/middleware/routes.js";
dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/api", route);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`));
  })
  .catch((error) => {
    console.log(error.message);
  });
