// heroes-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const heroes = new Schema({
    name: { type: String, required: false, default: "Hero" },
    healthPoints: { type: Array, required: false, default: [1,1,1] },
    power: { type: Number, required: false, default : 2 },
    level: { type: Number, required: false, default: 1 },
    experiencePoints: { type: Number, required: false, default: 0 },
    experienceForLevelUp: { type: Number, required: false, default: 10 },
    status: { type: String, required: false, default: "Healthy" },
  }, {
    timestamps: true
  });

  return mongooseClient.model('heroes', heroes);
};
