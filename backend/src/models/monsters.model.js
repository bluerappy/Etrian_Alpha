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
    image: { type: String, required: false,
       default: "http://image.noelshack.com/fichiers/2018/45/3/1541587423-slime.png"}
  }, {
    timestamps: true
  });

  return mongooseClient.model('monsters', monsters);
};
