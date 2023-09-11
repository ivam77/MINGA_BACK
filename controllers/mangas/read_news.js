import Manga from "../../models/Manga.js";
import Author from "../../models/Author.js";

export default async (req, res, next) => {

  try {

    let { sort } = req.query

    // Buscar el autor en la base de datos
    let author = await Author.findOne({user_id: req.user._id})
    if (!author) {
      return res.status(404).json({ message: 'Author not founded' });
    }

    let mangas = await Manga.find({ author_id: author._id})
      .sort({ createdAt: sort === 'asc' ? 1 : -1 })
      .populate('category_id')

    if(!mangas){
      return res.status(404).json({ error: 'Author not founded' })

    }else if (mangas.length < 4) {

      return res.json({ logo: 'https://i.postimg.cc/fyJsspq8/image.png', succes: true})

    }else if (mangas.length < 8) {
      let newestMangas = mangas.slice(0, 2);
      let oldestMangas = mangas.slice(-2);
      return res.json({ mangas: [...newestMangas, ...oldestMangas], success: true });

    }else {
      let newestMangas = mangas.slice(0, 4);
      let oldestMangas = mangas.slice(-4);
      return res.json({ mangas: [...newestMangas, ...oldestMangas], success: true });
    }

  } catch (error) {

    return next(error)

  }
};
