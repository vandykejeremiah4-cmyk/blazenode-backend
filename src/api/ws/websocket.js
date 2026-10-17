import { WebSocketServer } from "ws";

export function createWebSocketServer(server) {
  const wss = new WebSocketServer({ server });

  wss.on("connection", ws => {
    ws.send(JSON.stringify({ type: "connected", msg: "WS connected" }));

    setInterval(() => {
      ws.send(JSON.stringify({
        type: "metrics.global",
        uptime: "99.998%",
        activeNodes: 12,
        clusterLoad: Math.floor(Math.random() * 60)
      }));
    }, 2000);
  });
}
