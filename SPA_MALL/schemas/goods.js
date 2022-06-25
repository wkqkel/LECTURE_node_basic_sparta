const mongoose = require("mongoose");

const goodsSchema = mongoose.Schema({
  goodsId: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  thumbnailUrl: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
});
// 첫번째 인자는 모델이름, 두번째인자는 스키마
module.exports = mongoose.model("Goods", goodsSchema);
