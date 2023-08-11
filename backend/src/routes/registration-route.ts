import { validateBody } from "../middlewares/schema-validation";
import {
  createRegistration,
  destroyRegistration,
  getAllRegistration,
} from "../controllers/registration-controller";
import { Router } from "express";
import {
  deleteRegistrationSchema,
  registrationSchema,
} from "../schemas/registration-schemas";

const registrationRouter = Router();

registrationRouter
  .get("/registration", getAllRegistration)
  .post("/registration", validateBody(registrationSchema), createRegistration)
  .delete(
    "/registration",
    validateBody(deleteRegistrationSchema),
    destroyRegistration
  );

export default registrationRouter;
