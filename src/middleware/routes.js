import express from "express";

const router = express.Router();

import { verify } from "../middleware/jwt.js";
import { upload } from "../services/uploadFiles.js";

import { login, signUp } from "../controller/auth.js";
import { uploadFiles } from "./../controller/files.js";

router.get("/login", login);
router.post("/signup", signUp);

router.post("/uploadFile", [verify, upload.single("myFile")], uploadFiles);

router.get("/jwt-test", verify, (req, res) => {
  res.status(200).json(req.user);
});

export default router;
