import Comment from "../../models/Comment.js";

export default async (req, res, next) => {

    try {

        let user = req.user
        let { id } = req.params

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await Comment.updateOne({_id: id}, {comment: req.body.comment})
        res.status(200).json({message: "updated successfully", success: true});

    }

    catch(error){

        return next(error)

    }
}