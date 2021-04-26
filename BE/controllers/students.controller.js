const students = require("../data/students");
exports.getStudents = (req, res, next) => {
  res.status(200).json({
    data: students
  });
};
