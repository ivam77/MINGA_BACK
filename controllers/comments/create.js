import Comment from "../../models/Comment.js";

export default async (req, res, next) => {

    try {

        let user = req.user

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        let comment = await Comment.create(req.body)
        return res.status(201).json({ response: comment, message: 'Comment published', success: true})

    }

    catch(error){

        return next(error)

    }
}