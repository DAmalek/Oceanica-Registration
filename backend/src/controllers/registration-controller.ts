import { Response, Request } from "express";
import httpStatus, { OK } from "http-status";
import dayjs from "dayjs";
import registrationRepository from "../repositores/registration-repository";
import { string } from "joi";

export async function getAllRegistration(req: Request, res: Response) {
  try {
    const allRegistration = await registrationRepository.listAll();

    res.status(httpStatus.OK).send(allRegistration);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function createRegistration(req: Request, res: Response) {
  const { name, email, profession, salary } = req.body;
  const numSalary = Number(salary);

  try {
    const emailExists = await registrationRepository.findByEmail(email);

    if (emailExists)
      return res.status(httpStatus.CONFLICT).send("email already exists");

    const today = new Date();
    const registration = {
      name,
      email,
      profession,
      salary: numSalary,
      createdat: dayjs(today).format("DD/MM/YYYY HH:mm"),
    };
    registrationRepository.create(registration);

    res.status(httpStatus.CREATED).send(registration);
  } catch (error) {
    console.log(error.message);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function destroyRegistration(req: Request, res: Response) {
  const { email } = req.body;

  try {
    const emailExists = await registrationRepository.findByEmail(email);
    if (!emailExists)
      return res.status(httpStatus.CONFLICT).send("email dont exists yet");

    registrationRepository.destroy(email);
    res.status(OK).send(`register of ${email} destroyed`);
  } catch (error) {
    console.log(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}
