import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import registrationRouter from "./routes/registration-route";
dotenv.config();

const server = express();

server
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use([registrationRouter]);

const port = process.env.PORT || 5001;

server.listen(port, () => {
  console.log(`server runnin on port ${port}...`);
});
