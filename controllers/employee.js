var employee = require('../models/employee.js');

exports.allEmployee = function(req, res) {
    employee.getAllEmployee(req.query.cafe, function(err, emp) {
        if (err)
            res.send(err);
        res.send(emp);
    });
};

// filter with cafe id
exports.employeeCafe = function(req, res) {
    employee.getEmployeeCafe(req.query.cafe_id, function(err, emp) {
        if (err)
            res.send(err);
        res.send(emp);
    });
};

// create
exports.createEmployee = function(req, res) {
    var newEmployee = new employee(req.body);
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const date = req.body.start_date ? req.body.start_date : formattedDate;

    employee.createEmployee(req.body.cafe_id, date, newEmployee, function(err, employee) {
        if (err)
            res.send({
                "status" : "failed",
                "message": err
            });
        res.json({
            "status" : "success",
            "data" : employee ? employee[0] : "",
            "message" : "Added New Employee Successfully"
        });
    });
};

//update 
exports.updateEmployee = function(req, res) {
    employee.updateEmployee(req.body.id, req.body.cafe_id, new employee(req.body), function(err, employee) {
        if (err)
            res.send({
                "status" : "failed",
                "message": err
            });
        res.json({
            "status" : "success",
            "data" : employee ? employee[0] : "",
            "message" : "Update "+req.body.id+ " successfully"
        });
    });
};

// Delete
exports.deleteEmployee = function(req, res) {
    employee.deleteEmployee(req.body.id, function(err, employee) {
        if (err)
            res.send({
                "status" : "failed",
                "message": err
            });
        res.json({
            "status" : "success",
            "message": 'Deleted successfully' 
        });
    });
};