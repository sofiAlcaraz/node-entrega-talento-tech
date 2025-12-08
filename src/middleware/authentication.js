import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET_KEY;

export const authentication = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1]; // [***]_[token]
  if (!token) {
    return res.sendStatus(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, secretKey, (err) => {
    if (err) {
      return res.sendStatus(403).json({ message: "Forbidden" });
    }
    next();
  });
};
