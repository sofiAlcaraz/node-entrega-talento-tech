import * as model from "../models/users.model.js";

export const createUserController = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      return res.json({ message: "Incomplete data" });
    }

    if (await model.userExist(email)) {
      return res.json({ message: "The user already exists" });
    }

    const newUser = {
      email,
      password,
      username,
    };
    await model.createUser(newUser);
    res.status(201).json({ message: "User successfully created" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
