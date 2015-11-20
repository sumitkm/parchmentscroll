/// <reference path="../typings/requirejs/require.d.ts" />
/// <reference path="../typings/express/express.d.ts"/>

import * as express from "express";
var navigator = require("./navigation/navigator");

var app = express();
app.use(express.static('../www/'));

app.use('/router', navigator);
//app.get('/', (req, res) =>
//{
//  res.send('Hello World!');
//});

var server = app.listen(3000, () =>
{
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
