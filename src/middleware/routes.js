import express from "express";

const router = express.Router();
import User from "../database/modal/user.js";

import { login, signUp } from "../controller/auth.js";

router.get("/login", login);
router.post("/signup", signUp);

export default router;
