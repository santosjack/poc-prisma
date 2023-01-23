import joi from "joi";

const contactSchema = joi.object({
    name: joi.string().required(),
    phoneNumber: joi.number().required(),
    email: joi.string().email().required(),
});


export { contactSchema };