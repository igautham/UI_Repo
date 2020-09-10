var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = [{
    name: "goutham",
    age: 22,
    salary:80000
  },
  {
    name: "daniel",
    age: 23,
    salary:70000
  },
  {
    name: "nathan",
    age: 26,
    salary:60000
  }
];
  res.render('index', { title: 'Express', myName : 'Goutham' , users:data});
});

module.exports = router;
