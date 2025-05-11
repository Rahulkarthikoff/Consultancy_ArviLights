const express = require("express");
const router = express.Router();

const {
  createOffer,
  getOffers,
  deleteOffer,
} = require("../controller/offerController");
const { isAuthentictedUser, authorizeRoles } = require("../middleWare/auth");

// Admin route to create a new offer
router
  .route("/admin/offer/new")
  .post(isAuthentictedUser, authorizeRoles("admin"), createOffer);

// Public route to get all active offers
router.route("/offers").get(getOffers);

// Admin route to delete an offer
router
  .route("/admin/offer/:id")
  .delete(isAuthentictedUser, authorizeRoles("admin"), deleteOffer);

router.route("/offers/create").post(createOffer)

module.exports = router;