var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Access /contacts to get all the contacts');
});

module.exports = router;
