/// <reference path="../typings/requirejs/require.d.ts" />
/// <reference path="../typings/express/express.d.ts"/>

import * as express from "express";
var navigator = require("./navigation/routing-engine");
var app = express();

app.use(express.static('../www/'));

var nav = new navigator.crossRouter();
nav.registerRoutes();
app.use('/api', nav.route);

var server = app.listen(3000, () =>
{
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
