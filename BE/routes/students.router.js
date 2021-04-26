const express = require("express");
const router = express.Router();
const studentsController = require("../controllers/students.controller");

router.get("", studentsController.getStudents);

module.exports = router;
