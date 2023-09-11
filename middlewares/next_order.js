function next_order(req, res, next) {
    if (!req.body.order) {
        req.body.order = 1
        next();
        }else{
            next();
        }
};

export default next_order;

/*
import Chapter from "../models/Chapter.js"

let next_order = async(req, res, next) => {

    if (req.body.order) {                                  // Si el cuerpo de la solicitud incluye un valor para la propiedad "order", pasamos la solicitud al siguiente middleware.
        next();

    } else {
        try {
            const lastOrder = await Chapter.findOne({manga_id: req.body.manga_id})
            
            req.body.order = lastOrder.order + 1;         // Incrementamos el valor del último orden en 1 y asignamos este nuevo valor a la propiedad "order" del cuerpo de la solicitud.
            next();
            
            } catch (error) {
                next(error);
            
            }
    }
}

export default next_order;


function add_cover_photo(req, res, next) {
    if (req.body.cover_photo) {
      next();
    } else {
      req.body.cover_photo = req.body.pages[0];
      next();
    }
}
  
export default add_cover_photo;
*/