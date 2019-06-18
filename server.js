    //*******************************//
//server.js - This file is the initial starting point for the Node/Express server.
//*******************************//

//Requiring dependencies
//------------------------------//
var express = require("express");

//------------------------------//

//Sets up the Express App
//------------------------------//
var app = express();
var PORT = process.envPORT || 8080;

//Static directory
app.use(express.static("public"));

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//------------------------------//

//Set Handlebars
//------------------------------//
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//------------------------------//

// Import routes and give the server access to them
//------------------------------//
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});

//------------------------------//


