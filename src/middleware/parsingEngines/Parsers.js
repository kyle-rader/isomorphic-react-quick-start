import express from 'express';
var router = express.Router();

let colleges = {
  wwu: 'WesternWashingtonUniversity',
  def: 'WesternWashingtonUniversity',
};

router.get('/searchCriteria/:college', (req, res) => {
  let collegeKey = colleges[req.params.college] || 'default';
  let College = require(`../../app/models/colleges/${collegeKey}`);
  let college = new College(collegeKey);

  college.getSearchCriteria((err, criteria) => {
    res.status(err !== null ? 400 : 200).send( err !== null ? err : criteria);
  });

});

module.exports = router;
