var cafe = require('../models/cafe.js');

exports.allCafe = function(req, res) {
    cafe.getAllCafe(req.query.location, function(err, emp) {
        if (err)
            res.send(err);
        res.send(emp);
    });
};

// create
exports.createCafe = function(req, res) {
    var newCafe = new cafe(req.body);
    //handles null error
    // if(!newCafe.name || !newCafe.description){
    //     res.status(400).send({ error:true, message: 'Please provide name and description' });
    // } else{
    cafe.createCafe(newCafe, function(err, cafe) {
        if (err)
            res.send({
                "status" : "error",
                "message": err
            });
        res.json({
            "status" : "success",
            "data" : cafe[0],
            "message" : "Added New Cafe Successfully"
        });
    });
    // }
};

//update 
exports.updateCafe = function(req, res) {
    cafe.updateCafe(req.body.id, new cafe(req.body), function(err, cafe) {
        if (err)
            res.send({
                "status" : "error",
                "message": err
            });
        res.json({
            "status" : "success",
            "data" : cafe[0],
            "message" : "Update "+req.body.id+ " successfully"
        });
    });
};

// Delete
exports.deleteCafe = function(req, res) {
    cafe.deleteCafe(req.body.id, function(err, cafe) {
        if (err)
            res.send({
                "status" : "error",
                "message": err
            });
        res.json({
            "status" : "success",
            "message": 'Deleted successfully' 
        });
    });
};