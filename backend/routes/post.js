const express = require("express");
const { createPost } = require("../controller/postController");
const multer = require("../middleware/multer");
const { parseData } = require("../middleware/parseData");
const { postValidator, validate } = require("../middleware/postValidator");
const router = express.Router();

// Router
router.post(
  "/create",
  multer.single("thumbnail"),
  parseData,
  postValidator,
  validate,
  createPost
);

module.exports = router;
