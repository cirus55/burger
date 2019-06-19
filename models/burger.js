//Import the ORM to create functions that will interact with the database;
var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },
    create: function(vals,cb){
        orm.createOne(vals,function(res){
            console.log("callback create in burger js")
            cb(res);
        });
    },
    update: function(vals,cb){
        orm.updateOne(vals,function(res){
            console.log("callback and burger js")
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js)
module.exports = burger;