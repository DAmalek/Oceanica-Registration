import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";

function validate(schema: ObjectSchema, type: "body" | "params") {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type], {
      abortEarly: false,
    });

    if (!error) {
      next();
    } else {
      res
        .status(httpStatus.BAD_REQUEST)
        .send(error.details.map((d) => d.message));
    }
  };
}

export function validateBody<T>(schema: ObjectSchema<T>) {
  return validate(schema, "body");
}

export function validateParams<T>(schema: ObjectSchema<T>) {
  return validate(schema, "params");
}
