import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: "us-central-01", region: "US-Central", status: "online" },
    { id: "us-east-03", region: "US-East", status: "warning" },
    { id: "us-west-01", region: "US-West", status: "offline" }
  ]);
});

export default router;
