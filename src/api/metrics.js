import express from "express";
const router = express.Router();

router.get("/global", (req, res) => {
  res.json({
    uptime: "99.998%",
    activeNodes: 12,
    clusterLoad: 42,

    cpuLoad: 37,              // % CPU usage across cluster
    memoryUsed: 68,           // % RAM usage
    diskUsage: 54,            // % disk usage
    networkIn: "320 MB/s",    // inbound traffic
    networkOut: "280 MB/s",   // outbound traffic

    regions: {
      "US-East": { nodes: 4, load: 45 },
      "US-West": { nodes: 3, load: 38 },
      "US-Central": { nodes: 5, load: 52 }
    },

    incidents24h: 1,          // number of incidents in last 24 hours
    deploymentsToday: 3,      // number of deployments today
    version: "v1.4.2",        // cluster version
    lastRestart: "2026-10-16T18:22:00Z"
  });
});

export default router;
