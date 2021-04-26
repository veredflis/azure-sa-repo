

exports.postScores = (req, res, next) => {
  let studentsData = req.body;
  // running over the students scores
  console.log("getting request", req.body);


  res.status(200).json({
    data: "adding scores ",
  });
};
