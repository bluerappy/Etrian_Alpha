// monsters-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const monsters = new Schema({
    name: { type: String, required: true, unique: true },
    type: { type: String, required: false, default: "none" },
    healthPoints: { type: Number, required: true },
    power: { type: Number, required: true },
  }, {
    timestamps: true
  });

  return mongooseClient.model('monsters', monsters);
};
