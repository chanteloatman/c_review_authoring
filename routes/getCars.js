var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  connect.query("SELECT * FROM mainmodel", (err, result) => {
    if (err) { //if there's an error shows this
      throw err;
    } else { //if there isn't an error don't show
      console.log(result);

      res.render('cars',
      {
      title: 'Minis are Groovy',
      message : 'A selection of minis',
      carData : result
      });
    }
  });

});

module.exports = router;
