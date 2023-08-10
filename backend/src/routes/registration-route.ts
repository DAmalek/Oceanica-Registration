import { validateBody } from "../middlewares/schema-validation";
import {
  createRegistration,
  getAllRegistration,
} from "../controllers/registration-controller";
import { Router } from "express";
import { registrationSchema } from "../schemas/registration-schemas";

const registrationRouter = Router();

registrationRouter
  .get("/registration", getAllRegistration)
  .post("/registration", validateBody(registrationSchema), createRegistration);

export default registrationRouter;
