import Comment from "../../models/Comment.js";

export default async (req, res, next) => {

    let { chapter_id, page } = req.query

    try {
        
        let pagination = {
            page: 1,
            limit: 4,
        }

        if (req.query.page) {
            pagination.page = parseInt(req.query.page)
        }

        if (req.query.limit) {
            pagination.limit = parseInt(req.query.limit)
        }

        let comments = await Comment.find({ chapter_id })
            .sort({ createdAt: -1 })
            .skip( pagination.page > 0 ? (pagination.page -1) * pagination.limit : 0 )
            .limit( pagination.limit > 0 ? pagination.limit : 0 )
            .populate( "user_id" )
        
        let counter = await Comment.countDocuments( {chapter_id} )
        let totalPages = Math.ceil(counter / pagination.limit)
        let prev_page = pagination.page > 1 ? Number(pagination.page) -1 : 0
        let next_page = pagination.page < totalPages ? Number(pagination.page) + 1 : 0;

        return res.status(201).json({
            comments: comments,
            prev: prev_page,
            next: next_page,
            totalPages: totalPages,
            success: true
        })

    } catch (error) {

        return next(error);

    }
}