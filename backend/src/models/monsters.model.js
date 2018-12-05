// monsters-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const monsters = new Schema({
    name: { type: String, required: true, unique: true },
    level: { type: Number, required: false, default: 1},
    type: { type: String, required: false, default: "none" },
    healthPoints: { type: Number, required: true },
    power: { type: Number, required: true },
    experiencePots: { type: Number, required: false, default: 1 },
    itemsDrop: { type: String, required: false, default: "lifePotion" },
    image: { type: String, required: false,
       default: "http://image.noelshack.com/fichiers/2018/45/3/1541587423-slime.png"}
  }, {
    timestamps: true
  });

  return mongooseClient.model('monsters', monsters);
};

