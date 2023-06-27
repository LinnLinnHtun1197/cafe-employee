module.exports = function(app) {
    var employee = require('../controllers/employee');
    // Employee Routes
    app.route('/employee').get(employee.allEmployee);
    // app.route('/info/create').post(information.createInfo);
    // app.route('/info/:id').put(information.updateInfo);
    // app.route('/info/:id').delete(information.deleteInfo);
};