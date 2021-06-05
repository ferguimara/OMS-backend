var express = require('express');
const order = require('../models/order');
var router = express.Router();
//Require our model
var Order = require('../models/order')

//Routes:

/* GET users listing. */
router.get('/', function(req, res) {
  res.status(200).json([
    {date: '6/5/2021', product: 'iMac', price: '$2000', status: 'For Sale'}
  ])
});

/* Create Route w/ controller logic combined*/
router.post('/', function(req, res) {
  Order.create(req.body, function(err, order) {
    res.status(201).json(order);
  });
});

module.exports = router;
