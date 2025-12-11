import * as model from "../models/auth.model.js";
import { generateToken } from "../utils/token.generator.js";

export const loginController = async (req, res) => {
  const { password, username } = req.body;

  const userData = await model.login(username, password);
  if (userData == null) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = generateToken(userData.id);
  res.json({ token });
};
