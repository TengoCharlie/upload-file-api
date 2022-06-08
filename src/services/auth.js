import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
import User from "../database/modal/user.js";
class Auth {
  signUp(body) {
    return new Promise((resolve, reject) => {
      try {
        bcrypt.hash(body.password, 10, (error, hash) => {
          if (error) reject({ status: 500, message: error });
          else {
            const newUser = User({ email: body.email, password: hash });
            newUser
              .save()
              .then((user) =>
                resolve({
                  status: 200,
                  data: { token: this.generateToken(user) },
                })
              )
              .catch((err) => {
                if (err.keyPattern?.email == 1) {
                  err = { message: "Email ALready Exists" };
                }
                reject({ status: 500, message: err });
              });
          }
        });
      } catch (error) {
        reject({ message: error });
      }
    });
  }

  login(body) {
    return new Promise((resolve, reject) => {
      try {
        User.findOne({
          email: body.email,
        }).then((user) => {
          if (!user) reject({ status: 404, message: "user not found" });
          else {
            bcrypt.compare(body.password, user.password, (error, match) => {
              if (error) reject({ status: 500, message: error });
              else if (match)
                resolve({
                  status: 200,
                  data: { token: this.generateToken(user) },
                });
              else reject({ status: 403, message: "password do not match" });
            });
          }
        });
      } catch (error) {
        reject({ message: error });
      }
    });
  }

  generateToken(user) {
    return jwt.sign({ data: user }, process.env.TOKEN_SECRET, {
      expiresIn: "24h",
    });
  }
}

export default Auth;
