import jwt from "jsonwebtoken";

export const verfyToken = (req, res, next) => {
  const ACCESS_TOKEN_SECRET = "tien123";
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).send("Invalid token");
    req.email = decoded.email;
    next();
  });
};
