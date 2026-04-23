import jwt from "jsonwebtoken";
import CustomAPIError from "../errors/custom-error.js";
import UnauthenticatedError from "../errors/unauthenticated.js";

export default async function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No token provided");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;

    req.user = { id, username };
  } catch {
    throw new UnauthenticatedError("Not authorized to access this route");
  }

  next();
}
