import Author from "../../models/Author.js"

export default async (req, res, next) => {
    try {
        req.body.user_id = req.user.id
        req.body.active = false
        const one = await Author.create(req.body);
        return res.status(201).json({
            response: one,
            author: `${one.name} ${one.last_name}`,
            success: true,
            message: "Author created successfully"
        })

    } catch (error) {
        return next(error);
    }
}