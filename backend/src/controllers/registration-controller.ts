import { Response, Request } from "express";
import httpStatus from "http-status";
import dayjs from "dayjs";
import registrationRepository from "../repositores/registration-repository";

export async function getAllRegistration(req: Request, res: Response) {
  try {
    const allRegistration = registrationRepository.listAll();

    res.status(httpStatus.OK).send(allRegistration);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function createRegistration(req: Request, res: Response) {
  const { name, profession, salary } = req.body;

  try {
    const today = new Date();
    const registration = {
      name,
      profession,
      salary,
      createdat: dayjs(today).format("DD/MM/YYYY HH:mm"),
    };
    registrationRepository.create(registration);

    res.status(httpStatus.CREATED).send(registration);
  } catch (error) {
    console.log(error.message);
  }
}
