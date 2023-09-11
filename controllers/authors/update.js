import Author from "../../models/Author.js";
import User from "../../models/User.js";

const update = async (req, res, next) => {
    let role = req.body.active ? 1 : 0;
    console.log(req.body);
    try {

            const updateAuthor = await Author.findOneAndUpdate(
                { user_id: req.params.id },
                { active: req.body.active },
                { new: true }
            );

            // Actualizar el rol del usuario
            let userUpdate = await User.findByIdAndUpdate(
                req.params.id, 
                { role: role },
                { new: true }
            );

            return res.status(200).json({
                success: true,
                message: 'updated',
                updateAuthor,
                userUpdate
            });
    } catch (error) {
        next(error);
    }
};

export default update;
