// src/api/auth.js
import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();
const JWT_SECRET = "super-secret-change-me";

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Demo check – replace with real user lookup
  if (email !== "admin@blazenode.local" || password !== "blaze123") {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign(
    { sub: "admin-id-1", email, role: "admin" },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

export default router;
