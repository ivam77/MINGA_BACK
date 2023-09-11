import User from "../../models/User.js";
import crypto from "crypto"
import bcrypts from "bcryptjs"
import createEmailTransporter from "../../config/nodemailer.js"

export default async (req, res, next) => {

  req.body.role = 0;
  req.body.online = false;
  req.body.verified = false;
  req.body.verify_code = crypto.randomBytes(10).toString("hex")
  //req.body.password = bcrypts.hashSync(req.body.password, 16)

  try {
    const one = new User(req.body);
    createEmailTransporter(one)
      .then(res => console.log(res))
      .catch(error => console.log(error))
    await one.save()
    return res.status(201).json({
      response: one,
      success: true,
      message: "User created sucessfully",
    });
  } catch (error) {
    console.log(error);
    next(error)
  }
};
