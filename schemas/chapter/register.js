import joi from 'joi'

const chapterRegister = joi.object({
    manga_id: joi.string()
        .required()
        .min(3)
        .messages({
            'any.required' : 'The manga ID is required',
            'string.min': 'The manga ID must have a minimun of 3 characters',
            'string.alphanum': 'Manga ID must be an alphanumeric character.',
        }),
    title: joi.string()
        .required()
        .min(1)
        .max(30)
        .messages({
            'any.required' : 'Title is required',
            'string.min': 'Title must have a minimun of 1 character',
            'string.max': 'Title must have a maximum of 30 characters',
            'string.alphanum': 'Title must be an alphanumeric character.',
        }),
    cover_photo: joi.string()
        /*.required()*/
        .uri()
        .messages({
            'any.required' : 'Cover photo is required',
            'string.uri': 'Cover photo must be a valid URL',
        }),
    pages: joi.array()
        .required()
        .messages({
            'any.required' : 'Pages are required',
            'string.min': 'Pages must be at least one valid URL',
            'array.base': 'Pages must be a valid URL',
        }),
    order: joi.number()
        /*.min(1)*/
        .messages({
        'number.integer' : 'Order must be an integer number',
        'number.base' : 'Order must be a number'
    }),


})

export default chapterRegister;

/*
pages: joi.array()
        .required()
        .items(joi.string()),
    order: joi.number()
        .required(),
*/

