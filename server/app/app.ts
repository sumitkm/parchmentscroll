/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/express/express.d.ts"/>

import * as express from "express";

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

var navigator = require("./navigation/cross-router");
var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('www/'));

var nav = new navigator.crossRouter();
nav.registerRoutes();
app.use('/api', nav.route);

var server = app.listen(3000, () =>
{
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
