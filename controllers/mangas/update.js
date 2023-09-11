import Manga from "../../models/Manga.js";

export default async (req, res, next) => {
  const { id } = req.params;
  let { title, description, cover_photo } = req.body;
  let data = {};

  try {
    if (title) {
      data.title = title;
    }
    if (description) {
      data.description = description;
    }
    if (cover_photo) {
      data.cover_photo = cover_photo;
    }

    await Manga.updateOne({ _id: id }, { ...data });
    return res.status(201).json({
      success: true,
      message: "Manga updated sucessfully",
    });
  } catch (error) {
    return next(error);
  }
};
