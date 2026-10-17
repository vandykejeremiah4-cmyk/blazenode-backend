import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/stats", (req, res) => {
  res.json({
    activeServers: 1,
    communityMembers: 0,
    partners: 0
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`BlazeNode API running on port ${port}`);
});
