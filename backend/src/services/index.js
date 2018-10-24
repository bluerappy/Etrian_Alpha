const monsters = require('./monsters/monsters.service.js');
const heroes = require('./heroes/heroes.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(monsters);
  app.configure(heroes);
};
