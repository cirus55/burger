// Import MySQL connection. 
var connection = require("../config/connection.js");

// Object for all our SQL statement functions. 
var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    createOne: function (vals, cb) {
        var queryString = "INSERT INTO BURGERS " +
        "(burger_name, devoured) values(";
        queryString += vals.toString() + ",false)";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    updateOne: function(condition, cb) {
        var queryString = "UPDATE burgers SET devoured = true" +
        " WHERE ID = " + condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }

}

// Export the orm object for the model (burger.js)
module.exports = orm;