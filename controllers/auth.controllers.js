import * as model from "../models/auth.model.js";
import { generateToken } from "../src/utils/token.generator.js";

export const loginController = async (req, res) => {
  const { email, password, username } = req.body;

  const userData = await model.login(email, username, password);
  if (userData == null) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = generateToken(userData.id);
  res.json({ token });
};
