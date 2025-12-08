import jwt from "jsonwebtoken";
import "dotenv/config";

const secretKey = process.env.JWT_SECRET_KEY;

export const generateToken = (email) => {
  const expiration = { expiresIn: "1h" };
  return jwt.sign({ email }, secretKey, expiration);
};
