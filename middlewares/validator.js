const validator = (schema) => [

    (req, res, next) => {

        const validation = schema.validate(req.body,{abortEarly: false})//validate: valida el body
        if(validation.error) {                                          //abortEarly: false realiza todas las validaciones
            return res.status(400).json({                               //en caso contrario devuelve cada una de las validaciones

                success: false,
                message: validation.error.details.map(error => error.message)
            })
        }


        return next();
    }
];

export default validator;