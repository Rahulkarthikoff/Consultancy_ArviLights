const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  discountType: { type: String, enum: ["percentage", "fixed"], required: true },
  discountValue: { type: Number, required: true },
  applicableCategory: { type: mongoose.Schema.Types.ObjectId, ref: "categoriesmodels" }, // Reference to Category
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model("Offer", offerSchema);