import {
  createRegistration,
  getAllRegistration,
} from "../controllers/registration-controller";
import { Router } from "express";

const registrationRouter = Router();

registrationRouter
  .get("/registration", getAllRegistration)
  .post("/registration", createRegistration);

export default registrationRouter;
