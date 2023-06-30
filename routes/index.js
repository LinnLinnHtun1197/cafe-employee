module.exports = function(app) {
    var employee = require('../controllers/employee');
    var cafe = require('../controllers/cafe');
    
    // Employee Routes
    app.route('/employees').get(employee.allEmployee);
    app.route('/employees/search').get(employee.employeeCafe);
    app.route('/employee').post(employee.createEmployee);
    app.route('/employee').put(employee.updateEmployee);
    app.route('/employee/:id/delete').delete(employee.deleteEmployee);
    
    // Cafe Routes
    app.route('/cafes').get(cafe.allCafe);
    app.route('/cafe').post(cafe.createCafe);
    app.route('/cafe').put(cafe.updateCafe);
    app.route('/cafe/:id/delete').delete(cafe.deleteCafe);
};