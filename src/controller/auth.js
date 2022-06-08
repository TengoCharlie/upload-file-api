import Auth from "../services/auth.js";
const auth = new Auth();

export const login = async (req, res) => {
  try {
    let result = await auth.login(req.body);
    res.status(result.status).json(result.data);
  } catch (error) {
    res.status(error.status).json(error.message);
  }
};

export const signUp = async (req, res) => {
  try {
    let result = await auth.signUp(req.body);
    res.status(result.status).json(result.data);
  } catch (error) {
    res.status(error.status).json(error.message);
  }
};
