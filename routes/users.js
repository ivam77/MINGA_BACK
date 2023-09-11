import Router from "express";
import signinSchema from "../schemas/users/signinSchema.js";
import read from "../controllers/users/read.js";
import signin from "../controllers/users/signin.js";
import signout from "../controllers/users/signout.js";
import passwordIsOk from "../middlewares/passwordIsOk.js";
import accountNotExists from "../middlewares/accountNotExists.js";
import generateToken from "../middlewares/generateToken.js";
import passport from "../middlewares/passport.js";
import userSignUp from '../schemas/users/signUp.js'
import validator from '../middlewares/validator.js';
import register from "../controllers/users/register.js";
import is_property_of from "../middlewares/is_property_of.js"
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import  update  from "../controllers/authors/update.js";
import finds_id from "../middlewares/finds_id.js";
import verify_email from "../controllers/users/verify_email.js"
import updateUser from "../controllers/users/updateUser.js"


let auth_router = Router();

auth_router.post("/signin", validator(signinSchema), accountNotExists, passwordIsOk, generateToken,signin); //envía datos al servidor
auth_router.post("/signout",signout);
auth_router.post('/register',validator(userSignUp),accountExists,createHash,register)
auth_router.get("/verify/:verify_code", verify_email)
auth_router.get('/',/*passport.authenticate('jwt',{ session:false }),*/read) //leer uno o todos
auth_router.put('/role/author/:id',passport.authenticate('jwt', {session: false}),finds_id,updateUser)
auth_router.put('/update/:id', updateUser)

export default auth_router;
