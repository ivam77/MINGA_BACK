import Router from 'express';
import read from '../controllers/authors/read.js'
import read_me from '../controllers/authors/read_me.js';
import passport from '../middlewares/passport.js';
import userSignin from '../schemas/users/signinSchema.js'; '../schemas/users/signinSchema.js'
import validator  from '../middlewares/validator.js';
import { authorCreate } from '../schemas/authors/createsAuthors.js';
import create from '../controllers/authors/create.js';
import admin from "../controllers/authors/admin.js"


let author_router = Router();

author_router.get('/me', passport.authenticate('jwt',{ session:false }), read_me)
author_router.post('/authors',passport.authenticate('jwt',{ session:false }),validator(authorCreate), create) //crea un autor
author_router.get('/', read) //leer uno o todos
author_router.get('/admin',passport.authenticate('jwt',{session:false}),admin )
// author_router.purge() //actualizar un autor
// author_router.delete() //elimina un autor


export default author_router;