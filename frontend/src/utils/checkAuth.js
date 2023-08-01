import jwt from "jsonwebtoken";

export const checkAuth = (authHeader) => {
  if (authHeader) {
    // Bearer ...
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, process.env.JWT_SECRET);

        const result = { userId: user._id, token: token };

        return result;
      } catch (err) {
        return { error: "Invalid/Expired token" };
      }
    }
    return { error: "Authentication token must be 'Bearer [token]'" };
  }
  return { error: "Authorization header must be provided" };
};
