import joi from "joi";

const mangaUpdate = joi.object({
  title: joi.string().optional().min(1).max(30).messages({
    "any.min": "Title must be between 1 and 30 characters",
    "any.max": "Title must be between 1 and 30 characters",
  }),
  description: joi.string().optional().min(10).messages({
    "string.min": "Description length must be at least 10 characters long",
    "string.empty": "Description is not allowed to be empty",
  }),
  cover_photo: joi.string().optional().uri(),
});

export default mangaUpdate;
