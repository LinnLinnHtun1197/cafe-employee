'user strict';
var sql = require('../database/db.js');

//Info object constructor
var employee = function(emp){
    this.name               = emp.name;
    this.email_address      = emp.email_address;
    this.phone              = emp.phone_number;
    this.gender             = emp.gender;
};

// Store
employee.createInfo = function createInfo(employee, result) {
    sql.query("INSERT INTO EMPLOYEES SET ?", employee, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else{
            console.log(res);
            result(null, res);
        }
    });
};
employee.getAllEmployee = function getAllEmployee(result) {
    sql.query("SELECT * FROM EMPLOYEES", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('EMPLOYEES : ', res);
            result(null, res);
        }
    });
};
employee.updateInfo = function(id,res, result){
    const {name,about_content,age,phone,nationality,language,email,address,
    freelance_status,facebook,twitter,pinterest,behance,linkedin,dribbble,
    github,brand_image,about_image,about_image_lg,cvfile} = res;
    sql.query("UPDATE EMPLOYEES SET name = ?,about_content = ?,age = ?,phone = ?,nationality = ?,language = ?,email = ?,address = ?,freelance_status = ?,facebook = ?,twitter = ?,pinterest = ?,behance = ?,linkedin = ?,dribbble = ?,github = ?,brand_image = ?,about_image = ?,about_image_lg = ?,cvfile = ? WHERE id = ?", 
             [name,about_content,age,phone,nationality,language,email,address,freelance_status,facebook,twitter,pinterest,behance,linkedin,dribbble,github,brand_image,about_image,about_image_lg,cvfile, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

employee.deleteInfo = function(id, result){
    sql.query("DELETE FROM EMPLOYEES WHERE id = ?", [id], function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{

            result(null, res);
        }
    });
};

module.exports = employee;