const express = require("express");
const router = express.Router();
const scoresController = require("../controllers/scores.controller");


router.post("", scoresController.postScores);



module.exports = router;
