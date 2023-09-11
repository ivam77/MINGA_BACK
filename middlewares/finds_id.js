import Author from "../models/Author.js";

async function finds_id(req, res, next){

    try {
    const author = await Author.findOne({ user_id: req.user._id});
    if (author) {
        req.author = author;
        return next();
    }


    return res.status(404)
    .json({error: 'No author  found'});
    } 

    catch (error) {
    return res.status(500)
    .json({ error: error.message });
    }
}

export default finds_id;