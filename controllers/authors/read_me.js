import Author from "../../models/Author.js";

export default async (req, res, next) => {

    try {

        let author = await Author.findOne({user_id: req.user._id})
        .select('-user_id -active -updatedAt -__v')

        if(!author){
            return res.status(404).json({ error: 'Author not founded' })
        }
        return res.status(200).json({profile: author, success: true}) 
       
    } catch (error) {

        return next(error)

    }

}