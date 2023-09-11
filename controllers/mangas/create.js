import Manga from "../../models/Manga.js"

//permite crear documentos y guardarlo en mongo

export default async (req, res, next) => {
    try {
        const one = await Manga.create(req.body);

        return res.status(201).json({
            response: one,
            success: true,
            message: 'Manga created sucessfully' +one._id
        })

    } catch (error) {
        return next(error);
    }
}