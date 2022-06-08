import express from "express";

const router = express.Router();

import { verify } from "../middleware/jwt.js";

import { login, signUp } from "../controller/auth.js";

router.get("/login", login);
router.post("/signup", signUp);
router.get("/jwt-test", verify, (req, res) => {
  res.status(200).json(req.user);
});

export default router;
