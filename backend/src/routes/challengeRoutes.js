import express from "express";
import candidateInformationControll from "../controllers/candidateInformation.js";
import openPositionsControll from "../controllers/openPositions.js";
import postApplyControll from "../controllers/sendApply.js";

const challengeRouter = express.Router();

challengeRouter.get("/:candidateEmail", candidateInformationControll);
challengeRouter.get("/", openPositionsControll);
challengeRouter.post("/", postApplyControll);

export default challengeRouter;