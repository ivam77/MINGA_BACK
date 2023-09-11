import joi from 'joi'

const commentRegister = joi.object({
    /*chapter_id: joi.string()
        .optional()
        .messages({
            'any.required': 'Author is required',
        }),
    user_id: joi.string()
        .required()
        .messages({
            'any.required': 'Category is required',
        }),*/
    comment: joi.string()
        .required()
        .min(2)
        .max(200)
        .messages({
            "any.required": "You must write something",
            "string.min": "Comment length must be at least 2 characters long",
            "string.max": "Comment length is not allowed to be longer than 200 characters.",
        }),
});

export default commentRegister;