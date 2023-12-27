import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req?.cookies?.access_token;

  if (!token) return next(errorHandler(401, "You are not authenticated"));
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Token is not valid"));

    req.user = user;
    next();
  });
};

export const verifyAdmin = (req, res, next) => {
  const userRole = req.user?.role;

  if (userRole !== "admin") {
    return next(
      errorHandler(403, "You do not have permission to access this resource")
    );
  }

  next();
};
