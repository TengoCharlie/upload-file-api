import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

export const verify = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) res.status(403).json({ error: "please provide a token" });
  else {
    jwt.verify(
      token.split(" ")[1],
      process.env.TOKEN_SECRET,
      (error, value) => {
        if (error) res.status(500).json({ error: "Authorization Failed" });
        req.user = value.data;
        next();
      }
    );
  }
};
