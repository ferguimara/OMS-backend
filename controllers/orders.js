var Order = require('../models/order')

module.exports = {
    index,
    create,
    update,
    delete: deleteOrder,
};

function index(req, res) {
    Order.find({}, function(err, orders) {
      res.status(200).json(orders);
    });
}

function create(req, res) {
    console.log('create controller',req.body)
    Order.create(req.body, function(err, order) {
      res.status(201).json(order);
    });
}

function update(req, res) {
    Order.findByIdAndUpdate(req.params.id, req.body, function () {
        //calling index to forward the request to our index action so we can send a brand new list of orders as a response to updating an order
        index(req, res);
    });
}

function deleteOrder(req, res) {
    Order.findByIdAndDelete(req.params.id, function () {
        index(req, res);
    })
}

