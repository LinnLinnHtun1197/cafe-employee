var employee = require('../models/employee.js');

exports.allEmployee = function(req, res) {
    employee.getAllEmployee(function(err, info) {
        if (err)
        {
            res.send(err);
        }
        res.send(info);
    });
};

exports.createInfo = function(req, res) {
    var newInfo = new Information(req.body);

    //handles null error
    if(!newInfo.name || !newInfo.phone){
        res.status(400).send({ error:true, message: 'Please provide task/status' });
    } else{

        Information.createInfo(newInfo, function(err, info) {

            if (err)
                res.send(err);
            res.json(info);
        });
    }
};

exports.updateInfo = function(req, res) {
    Information.updateInfo(req.params.id, new Information(req.body), function(err, info) {
        if (err)
            res.send(err);
        res.json(info);
    });
};


exports.deleteInfo = function(req, res) {
    Information.deleteInfo( req.params.id, function(err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Info successfully deleted' });
    });
};