import Chapter from '../models/Chapter.js';

const exists_order = async (req, res, next) => {
    try {
        const { manga_id, order } = req.body;

        // Buscar el capítulo en la base de datos
        const existingChapter = await Chapter.findOne({ manga_id, order });

        // Verificar si el capítulo ya existe
        if (existingChapter) {
            return res.status(400).json({ message: 'El número de capítulo ya existe.' });
        }

        // Si el capítulo no existe, continuar al siguiente middleware o controlador
        next();
    } catch (error) {
        return next(error)
    }
};

export default exists_order;