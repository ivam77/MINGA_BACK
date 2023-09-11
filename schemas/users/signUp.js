import joi from "joi";

const userSignUp = joi.object({
  email: joi
    .string()
    .required()
    .email({
      minDomainSegments: 2,
    })
    .messages({
      "string.email": "This mail is not valid, please insert a valid mail",
      "string.empty": "A mail is required"
    }),
  photo: joi.string().required().uri().messages({
    "string.uri": "Invalid photo URL. Please provide a valid URL",
    "string.empty": "Please, insert a photo URL"
  }),
  password: joi.string().required().min(8).max(500).messages({
    "string.min": "Your password must have a minimum of 8 characters",
    "string.max": "Your password must have a maximum of 20 characters",
    "string.empty": "Please, insert a password"
  }),
});

export default userSignUp;
