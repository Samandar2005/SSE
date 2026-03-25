import express from "express";
import cors from "cors";

const app = express();
const port = 4000;
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

const clients = {};

const send = (orderId, message) => {
  const clientRes = clients[orderId];
  if (!clientRes) return;
  clientRes.write(`data: ${JSON.stringify({ status: message })}\n\n`);
};

app.post("/order", (req, res) => {
  const orderId = Date.now().toString();
  setTimeout(() => send(orderId, "your order accepted"), 2000);
  setTimeout(() => send(orderId, "your order is being prepared"), 5000);
  setTimeout(() => send(orderId, "your order is ready for pick up"), 10000);
  res.json({ id: orderId });
});

app.get("/events/:id", (req, res) => {
  const id = req.params.id;

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.write("retry: 10000\n\n");

  clients[id] = res;
  req.on("close", () => { delete clients[id]; });
});

app.listen(port, () => console.log(`Server listening on ${port}`));