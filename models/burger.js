//Import the ORM to create functions that will interact with the database;
var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },
    create: function(vals,cb){
        orm.createOne(vals,cb,function(res){
            cb(res);
        });
    },
    update: function(vals,cb){
        orm.updateOne(vals,cb,function(res){
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js)
module.exports = burger;