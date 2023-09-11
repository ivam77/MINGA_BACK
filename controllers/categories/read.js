import Category from "../../models/Category.js";

export default async (req, res) => {
  try {
    let categories = await Category.find();
    if (categories.length > 0) {
      return res.status(200).json({
        categories,
        success: true,
        message: "you have requested GET /api/categories/",
        date: new Date(),
      });
    } else {
      return res.status(404).json({
        response: null,
        success: false,
        message: "not found categories",
        date: new Date(),
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      response: null,
      success: false,
      message: error.message,
    });
  }
};
