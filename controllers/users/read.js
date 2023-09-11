import User from "../../models/User.js"

export default async (req, res) => {
  try {
    let all = await User.find()
    if (all.length > 0) {
      return res.status(200).json({
        success: true,
        users: all,
        //message: "you have requested GET /api/users",
        date: new Date()
      });
    } else {
      return res.status(404).json({
        response: null,
        success: false,
        message: "not found authors",
        date: new Date(),
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      response: null,
      message: error.message,
    });
  }
}
