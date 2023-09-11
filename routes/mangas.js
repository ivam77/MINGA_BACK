import Router from 'express';
import read from '../controllers/mangas/read.js'
import create from '../controllers/mangas/create.js';
import validator from '../middlewares/validator.js'
import mangaRegister from '../schemas/mangas/register.js';
import passport from '../middlewares/passport.js';
import read_one from '../controllers/mangas/read_one.js';
import read_news from '../controllers/mangas/read_news.js';
import get_me from '../controllers/mangas/get_me.js';
import is_property_of from '../middlewares/is_property_of.js'
import update from '../controllers/mangas/update.js';
import destroy from '../controllers/mangas/destroy.js';

let manga_router = Router();

manga_router.post('/mangas',validator(mangaRegister),create) //crea una manga
manga_router.get('/',read) //leer uno o todos
manga_router.get('/me',passport.authenticate('jwt',{ session:false })/*, finds_id */,is_property_of,get_me)
manga_router.get('/news', passport.authenticate('jwt',{ session:false }), read_news)
manga_router.get('/:id',passport.authenticate('jwt',{ session:false }),read_one)
manga_router.put('/:id',passport.authenticate('jwt',{ session:false }),/* finds_id, */ /* ,is_active, */ is_property_of, update) //actualizar un manga
manga_router.delete('/:id',passport.authenticate('jwt',{ session:false }),/* finds_id, */ /* ,is_active, */ is_property_of, destroy)  //elimina un manga

export default manga_router;