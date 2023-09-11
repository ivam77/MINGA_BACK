import User from "../models/User.js"
import bcryptjs from "bcryptjs"

export default async(req,res,next)=> {
    try {
        let one = await User.findOne({ email:req.body.email })
        let mongo_user_password = one.password
        let form_password = req.body.password
        let compare = bcryptjs.compareSync(form_password, mongo_user_password)
        console.log(mongo_user_password)
        console.log(form_password)
        console.log(compare)
        if (compare) {
            return next()
        }
        return res.status(400).json({
            success:false,
            message:'Invalid credentials!'
        })
    } catch (error) {
        return next(error)
    }
}


/*
import bcryptjs from 'bcryptjs'

export default async (req, res, next) => {
    try {
        let one = await User.findOne({ email:req.body.email })
        let db_pass = one.password;
        let form_pass = req.body.password;

        if (bcryptjs.compareSync(form_pass, db_pass)){
          return next()
        }
        
    } catch (error) {
        return res.status(400).json({
          success: false,
          message: 'wrong credentials!'
        })
        
    }
}*/
