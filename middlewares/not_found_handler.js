import createHttpError from "http-errors";

const notFound = (req, res, next) => {
  next(createHttpError(404, " routes that do not exist on our server "));
};

export default notFound; 