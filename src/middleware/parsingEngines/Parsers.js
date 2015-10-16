import express from 'express';
var router = express.Router();

let colleges = {
  wwu: 'WesternWashingtonUniversity',
  def: 'WesternWashingtonUniversity',
};

router.get('/searchCriteria/:college', (req, res) => {
  let collegeKey = colleges[req.params.college] || 'default';
  let College = require(`./${collegeKey}`);
  let college = new College();

  college.getSearchCriteria((err, innerRes, body) => {
    console.log("Got response from Classfinder");
    res.send(body);
  });
});

module.exports = router;
