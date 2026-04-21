import jwt from "jsonwebtoken";
import CustomAPIError from "../errors/custom-error.js";

export default async function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    throw new CustomAPIError("No token provided", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;

    req.user = { id, username };
  } catch (error) {
    throw new CustomAPIError(error.message, 401);
  }

  next();
}
