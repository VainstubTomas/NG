//server configuration
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

server.listen(8080, () => {
    console.log("[APP] Server running on 8080 port.");
});