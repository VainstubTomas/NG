import express from "express";
import candidateInformationControll from "../controllers/candidateInformation.js";
import openPositionsControll from "../controllers/openPositions.js";

const challengeRouter = express.Router();

challengeRouter.get("/:candidateEmail", candidateInformationControll);
challengeRouter.get("/", openPositionsControll);

export default challengeRouter;