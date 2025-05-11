const Offer = require("../model/offerModel");
const ProductModel = require("../model/ProductModel");

exports.createOffer = async (req, res) => {
  const { category, offerEndDate, offerName, offerPercentage } = req.body; // Expecting both in the request

  try {
    // Convert incoming date to IST
    const istDateStr = new Date(offerEndDate).toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    });

    const istDate = new Date(istDateStr);

    // Optional: Set time to end of day (11:59:59 PM IST)
    istDate.setHours(23, 59, 59, 999);

    const result = await ProductModel.updateMany(
      { category },
      {
        $set: {
          offer: true,
          offerEndDate: istDate,
          offerPercentage: offerPercentage,
          offerName: offerName,

        },
      }
    );

    res.status(200).json({
      success: true,
      message: `Offer applied to ${result.modifiedCount} products`,
      offerEndDate: istDate,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getOffers = async (req, res) => {
  try {
    const offers = await Offer.find({
      isActive: true,
      endDate: { $gte: new Date() },
    }).populate("applicableCategory"); // Populate category details
    res.status(200).json({ success: true, offers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteOffer = async (req, res) => {
  try {
    await Offer.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Offer deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};