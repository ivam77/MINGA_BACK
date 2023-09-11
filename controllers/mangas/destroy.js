import Manga from "../../models/Manga.js";
import Chapter from "../../models/Chapter.js";

export default async (req, res, next) => {
  const { id } = req.params;

  try {
    await Chapter.deleteMany({ manga_id: id });
    await Manga.deleteOne({ _id: id });

    return res.status(201).json({
      success: true,
      message: "Manga deleted successfully",
    });
  } catch (error) {
    return next(error);
  }
};
