import joi from "joi"

export const authorCreate = joi.object({
    name: joi
    .string()
    .required()
    .messages({
        "string.empty": "A name is required",
    }),
    last_name: joi
    .string()
    .allow(null)
    .empty(''),
    city: joi
    .string()
    .required()
    .messages({
        "string.empty": "A city is required",
    }),
    country: joi
    .string()
    .required()
    .trim()
    .messages({
        "string.empty": "A country is required",
    }),
    photo: joi
    .string()
    .uri()
    .required()
    .messages({
        "string.empty": "A url is required",
    }),
})