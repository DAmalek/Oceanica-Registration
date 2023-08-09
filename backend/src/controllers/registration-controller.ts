import { Response, Request } from "express";
import httpStatus from "http-status";
import registrationRepository from "../repositores/registration-repository";

export async function getAllRegistration(req: Request, res: Response) {
  try {
    const allRegistration = registrationRepository.listAll();

    res.status(httpStatus.OK).send(allRegistration);
  } catch (error) {
    console.log(error.message);
  }
}
