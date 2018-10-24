// Initializes the `heroes` service on path `/heroes`
const createService = require('feathers-mongoose');
const createModel = require('../../models/heroes.model');
const hooks = require('./heroes.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/heroes', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('heroes');

  service.hooks(hooks);
};
