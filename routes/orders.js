var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.status(200).json([
    {date: '6/5/2021', product: 'iMac', price: '$2000', status: 'For Sale'}
  ])
});

module.exports = router;
