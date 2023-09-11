import Manga from "../../models/Manga.js";

async function read(req, res, next) {
  try {
    let queries = {};
    let pagination = { page: 1, limit: 4 };

    if (req.query.page) {
      pagination.page = req.query.page;
    }

    if (req.query.limit) {
      pagination.limit = req.query.limit;
    }

    if (req.query.category_id) {
      queries.category_id = req.query.category_id.split(",");
    }

    if (req.query.title) {
      queries.title = new RegExp(req.query.title.trim(), "i");
    }

    let mangas = await Manga
      .find(queries, "cover_photo title _id")
      .sort({ title: "asc" })
      .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)
      .limit(pagination.limit > 0 ? pagination.limit : 0)
      .populate("category_id", "name -_id")

    const count = await Manga.countDocuments(queries);
    const totalPages = Math.ceil(count / pagination.limit);
    const prevPage = pagination.page > 1 ? Number(pagination.page) - 1 : 0;
    const nextPage = pagination.page < totalPages ? Number(pagination.page) + 1 : 0;

    const response = {
      success: true,
      mangas: mangas,
      prev: prevPage,
      next: nextPage,
      totalPages
    }
    console.log(response)

    return res.status(200).json(
    response  
    );
  } catch (error) {
    next(error);
  }
}

export default read;
