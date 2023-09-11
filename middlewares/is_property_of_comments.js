import Comment from '../models/Comment.js';

const is_property_of_comments = async (req, res, next) => {
    try {
        let { id } = req.params;
        let comment = await Comment.findById(id);

        if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
        }

        // Verifica si el usuario autenticado es el propietario del comentario.
        if (comment.user_id.toString() !== req.user.id) {
        return res.status(403).json({ error: 'You do not have permission to modify this comment' });
        }
        
        // Si pasa la verificación, continúa con la siguiente función.
        next();
    } catch (err) {
        return next(err);
    }
};

export default is_property_of_comments
