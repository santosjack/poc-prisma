import joi from "joi";

const contactSchema = joi.object({
    name: joi.string().required(),
    phoneNumbers: joi.array(),
    emails: joi.array(),
});


export { contactSchema };