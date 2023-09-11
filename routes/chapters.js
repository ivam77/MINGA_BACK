import Router from 'express';
import read from '../controllers/chapters/read.js'
import create from '../controllers/chapters/create.js'
import validator from '../middlewares/validator.js'
import chapterRegister from '../schemas/chapter/register.js'
import exists_order from '../middlewares/exists_order.js'
import passport from '../middlewares/passport.js';
import read_one from '../controllers/chapters/read_one.js';
import add_cover_photo from '../middlewares/add_cover_photo.js';
import next_order from '../middlewares/next_order.js';

let chapter_router = Router();

chapter_router.get('/', passport.authenticate('jwt', { session: false }), read) //leer uno o todos
chapter_router.get('/:id', read_one)
chapter_router.post('/', passport.authenticate('jwt', { session: false }), validator(chapterRegister), /*has_permition, is_active, is_property_of, */ add_cover_photo, exists_order, next_order, create) //crea un capítulo
// chapter_router.purge() //actualizar un autor
// chapter_router.delete() //elimina un autor

export default chapter_router;