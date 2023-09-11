import Author from "../models/Author.js";
import Manga from "../models/Manga.js";

async function propertyOf(req, res, next) {
  try {
    let author = await Author.findOne({
      user_id: req.user._id
    })
    let manga = await Manga.findOne({
      author_id: author._id,
      _id: req.params.id,
    });
console.log(manga)
console.log(author)
    if (manga) {
      return next();
    }
    return res
      .status(404)
      .json({ message: "You do not have permission to modify this manga" });
  } catch (error) {
    next(error);
  }
}
export default propertyOf;
