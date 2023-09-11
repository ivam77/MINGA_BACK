import Router from 'express'
import create from '../controllers/comments/create.js'
import all_from_chapter from '../controllers/comments/all_from_chapter.js'
import update from '../controllers/comments/update.js';
import destroy from '../controllers/comments/destroy.js';
import passport from '../middlewares/passport.js'
import validator from '../middlewares/validator.js';
import is_property_of_comments from '../middlewares/is_property_of_comments.js';
import commentRegister from '../schemas/comments/register.js';

let comment_router = Router();

comment_router.post('/', passport.authenticate('jwt',{ session:false }), create)
comment_router.get("/", passport.authenticate('jwt',{ session:false }), all_from_chapter)
comment_router.put("/:id", passport.authenticate('jwt',{ session:false }), validator(commentRegister), is_property_of_comments, update)
comment_router.delete("/:id", passport.authenticate('jwt',{ session:false }), is_property_of_comments, destroy)

export default comment_router;