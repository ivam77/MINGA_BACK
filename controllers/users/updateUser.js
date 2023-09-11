import User from "../../models/User.js";

const updateUser = async (req, res, next) => {

  const { email, photo, role, online, verified, verify_code } = req.params;
  const datosUser = req.body;

  let queries = {};

  if (email) {
    queries.email = email;
  }
  
  if(photo) {
    queries.photo = photo;
  }

  if(role) {
    queries.role = role;
  }

  if(online) {
    queries.online = online;
  }

  if(verified) {
    queries.verified = verified;
  }

  if(verify_code) {
    queries.verify_code = verify_code;
  }

    try {
      let updateUser = await User.findByIdAndUpdate(req.params.id, queries);

      return res.status(200).json({
      success: true,
      message: 'updated',
      updateUser
    });
    } catch (error) {
        next(error);
    }
};

export default updateUser;

/*import User from "../../models/User.js";

const updateUser = async (req, res, next) => {
  const { email, photo, role, online, verified, verify_code } = req.params; // Se asume que el ID del user se pasa como parámetro en la URL.
  const datosUser = req.body; // Datos actualizados del user enviados en el cuerpo de la solicitud.

  let queries = {};

  if (email) {
    queries.email = email;
  }
  
  if(photo) {
    queries.photo = photo;
  }

  if(role) {
    queries.role = role;
  }

  if(online) {
    queries.online = online;
  }

  if(verified) {
    queries.verified = verified;
  }

  if(verify_code) {
    queries.verify_code = verify_code;
  }

  try {
    let user = await User.findOne(queries);

    if (!user) {
      return res.status(404).json({ mensaje: "User not found" });
    }

    // Actualizamos los datos del usuario con los valores enviados en el cuerpo de la solicitud.
    await User.updateOne(queries, datosUser);

    res.status(200).json({ message: "Updated successfully", success: true, user });
  } catch (error) {
    return next(error);
  }
};

export default updateUser;
*/
