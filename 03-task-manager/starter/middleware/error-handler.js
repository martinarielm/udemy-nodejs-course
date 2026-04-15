import { APIError } from "../errors/custom-error.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof APIError) {
    return res.status(err.status).json({ error: err.message });
  }

  res
    .status(500)
    .json({ error: "Something went wrong, please try again later" });
};

export default errorHandler;
