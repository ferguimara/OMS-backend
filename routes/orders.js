var express = require('express');
const order = require('../models/order');
var router = express.Router();
//Require our controller
var ordersCtrl = require('../controllers/orders');


//Routes:

/* GET users listing. */
router.get('/', ordersCtrl.index);

/* Create Route */
router.post('/', ordersCtrl.create);

/* Update Route */
router.put('/:id', ordersCtrl.update);

/* Delete User */
router.delete('/:id', ordersCtrl.delete);

module.exports = router;
