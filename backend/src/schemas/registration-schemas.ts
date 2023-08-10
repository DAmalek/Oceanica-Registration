import joi from "joi";

export const registrationSchema = joi.object({
  name: joi.string().min(2).max(99).required(),
  profession: joi.string().min(4).max(99).required(),
  salary: joi.number().required(),
});
