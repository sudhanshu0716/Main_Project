const express = require("express");
const {
  saveMarkedPoint,
  getAllMarkedPoints,
  deleteMarkedPoint,
} = require("../controllers/markedPointsController");

const router = express.Router();

router.post("/save", saveMarkedPoint);
router.get("/", getAllMarkedPoints);
router.delete("/delete/:id", deleteMarkedPoint);

module.exports = router;
