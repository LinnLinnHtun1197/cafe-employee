'user strict';
var sql = require('../database/db.js');

//Cafe object constructor
var cafe = function(cafe){
    this.name        = cafe.name;
    this.description = cafe.description;
    this.logo        = cafe.logo;
    this.location    = cafe.location;
};

// Get Cafe Information
cafe.getAllCafe = function(location, result) {
    let query = `SELECT cafes.id, cafes.name, cafes.description, cafes.logo, cafes.location, COUNT(employee_cafe.employee_id) AS employees
                FROM cafes
                LEFT JOIN employee_cafe ON cafes.id = employee_cafe.cafe_id
                GROUP BY cafes.id, cafes.name, cafes.description, cafes.logo, cafes.location `;

    if (location) {
        query += ` HAVING cafes.location = '${location}'`;
    }

    query += ` ORDER BY employees DESC`;

    sql.query(query, function (err, res) {
        if(err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

// Create
cafe.createCafe = function createCafe(cafe, result) {
    sql.query("INSERT INTO CAFES SET ?", cafe, function (err, res) {
        if(err) {
            result(err, null);
        } else{
            let query = `SELECT *
                FROM CAFES
                WHERE name = '${cafe.name}' 
                ORDER BY id DESC LIMIT 1`; // to get inserted record

            sql.query( query, function (err, response) {
                if(err) {
                    result(err, null);
                } else {
                    result(null, response);
                }
            });
        }
    });
};

// Update
cafe.updateCafe = function(id,res, result){
    const {name,description,logo,location} = res;
    sql.query("UPDATE CAFES SET name = ?, description = ?, logo = ?, location = ? WHERE id = ?", 
            [name, description, logo, location, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            let query = `SELECT cafes.id, cafes.name, cafes.description, cafes.logo, cafes.location, COUNT(employee_cafe.employee_id) AS employees
                        FROM cafes 
                        LEFT JOIN employee_cafe ON cafes.id = employee_cafe.cafe_id 
                        LEFT JOIN employees ON employees.id = employee_cafe.employee_id 
                        WHERE cafes.id = '${id}'`; // to get updated record

            sql.query( query, function (err, response) {
                if(err) {
                    result(err, null);
                } else {
                    result(null, response);
                }
            });
        }
    });
};

cafe.deleteCafe = function(id, result){
    var paramId = id;
    sql.query(`DELETE FROM employee_cafe WHERE cafe_id = '${paramId}'`, function (err, res) {
        if(err) {
            result(null, err);
        } else {
            sql.query(`DELETE FROM cafes WHERE id = '${paramId}'`, function (err, res) {
                if(err) {
                    result(null, err);
                } else {
                    result(null, res);
                }
            });
        }
    });
};

module.exports = cafe;