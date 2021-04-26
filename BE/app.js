const express = require("express");
const cors = require("cors");
const app = express();
//const mongoose = require("mongoose");
const studentsRouter = require("./routes/students.router");
const scoresRouter = require("./routes/scores.router");

//mongoose.connect("mongodb://127.0.0.1:27017");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//routes
app.use("/api/students", studentsRouter);
app.use("/api/scores", scoresRouter);

module.exports = app;
