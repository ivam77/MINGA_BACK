import Chapter from "../../models/Chapter.js";

const read = async (req, res, next) => {
  try {
    const mangaId = req.query.manga_id;
    let page = parseInt(req.query.page) || 1;
    const limit = 6;

    const skip = (page - 1) * limit;
    const chapters = await Chapter.find({ manga_id: mangaId })
      .select("-createdAt -updatedAt -__v")
      .sort({ order: 1 })
      .skip(skip)
      .limit(limit);
    const count = await Chapter.countDocuments({ manga_id: mangaId });
    
    const totalPages = Math.ceil(count / limit);
    const prevPage = page > 1 ? page - 1 : 0;
    const nextPage = page < totalPages ? page + 1 : 0;

    return res.status(200).json({
      success: true,
      chapters: chapters,
      prev: prevPage,
      next: nextPage,
      currentPage:page
    });
  } catch (error) {
    return next(error);
  }
};

export default read;
