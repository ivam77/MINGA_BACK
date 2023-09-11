import User from '../../models/User.js'

export default async (req, res, next) => {
    try {
        const one = await User.findOne({email:req.body.email});

        return res.status(201).json({
            response: one,
            success: true,
            message: 'User created'
        })
    } catch (error) {

        console.log(error) //consologueo el error
        next(error)
        }
    }
