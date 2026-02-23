//server configuration
import http from "http";
import express from "express";
import dotenv from "dotenv";
import challengeRouter from "./routes/challengeRoutes.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use("/api/", challengeRouter);

server.listen(8080, () => {
    console.log("[APP] Server running on 8080 port.");
});