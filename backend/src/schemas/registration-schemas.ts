import joi from "joi";

export const registrationSchema = joi.object({
  name: joi.string().min(2).max(99).required(),
  email: joi.string().email().min(5).max(99).required(),
  profession: joi.string().min(3).max(99).required(),
  salary: joi.number().required(),
});

export const deleteRegistrationSchema = joi.object({
  email: joi.string().email().min(5).max(99).required(),
});
