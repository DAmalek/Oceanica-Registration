import { getAllRegistration } from "../controllers/registration-controller";
import { Router } from "express";

const registrationRouter = Router();

registrationRouter.get("/registration", getAllRegistration);

export default registrationRouter;
