import Manga from "../../models/Manga.js";
export default async (req, res, next) => {        //función asíncrona con 3parametros 1la solicitud HTTP, 2respuesta HTTP, 3función para pasar el control a la siguiente función de middleware
    
  let {id} = req.params
    try {
        let manga = await Manga.findById(id)
        .select("-createdAt -updatedAt -__v")
        .populate('category_id','name -_id')
        .populate('author_id','name -_id')
        
        res.status(200).json({ manga, success: true })
    } catch (error) {
        res.status(500).json({ error, success: false })
    }
}