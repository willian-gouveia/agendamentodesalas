module.exports = (request, response, next) => {
    const page = parseInt(request.query.page) || 1;
    const limit = parseInt(request.query.limit) || 5;
    const offset = (page - 1) * limit;

    request.pagination = { limit, offset };
    next();
  };
  