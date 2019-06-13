const Model = require('../models/company');

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.list = async (req, res, next) => {
  try {
    const entities = await Model.find();
    res.json(entities);
  }
  catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.show = async (req, res, next) => {
  try {
    const entity = await Model.findById(req.params.id);

    if (!entity) {
      req.notFoundReason = `Document ${req.params.id} not found`;
      return next();
    }

    res.json(entity);
  }
  catch (err) {
    next(err);
  }
};
