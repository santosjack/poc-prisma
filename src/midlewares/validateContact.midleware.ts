import { Request, Response } from "express";
import {contactSchema} from "../models/contactSchema.js";
import {Contact, EntityContact} from "../protocols/contact.protocol.js";


export function contactSchemaValidation(req: Request, res: Response, next) {
  const newContact = req.body;

  const { error } = contactSchema.validate(newContact, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  res.locals.contact = newContact;


  next();
}