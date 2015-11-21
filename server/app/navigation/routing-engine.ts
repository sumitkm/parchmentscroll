// This is the routing middleware that uses crossroads.js
/// <reference path="../../typings/crossroads/crossroads.d.ts"/>

import * as express from "express";
import * as crossroads from "crossroads";

export class crossRouter
{
  constructor()
  {
    // Ideally all the routes will be specified in an array.
    // The constructor will simply loop through the array
    // and add the route to crossroads along with relevant
    // details required to fire off a handler that gets the data
    // that the api will eventually return
    crossroads.addRoute("/blog/{id*}", (res, params)=>
    {
      console.log("id: " + JSON.stringify(params));

      res.send("The Blog {id} is : " + params);
    });
  }

  // All routes that start with /api are sent to this function.
  // This is as per the middleware configuration in app.ts
  // e.g.
  //  var navigator = require("./navigation/routing-engine");
  //  var nav = new navigator.crossRouter();
  //  app.use('/api', nav.route);
  public route = (req: express.Request, res: express.Response, next: any) =>
  {
    console.log('CROSS ROUTER:' + req.url);
    crossroads.parse(req.url, [res]);
    next();
  }
}
//import navigation = require("./navigation");

// var router = express.Router();
//
// router.use((req, res, next) =>
// {
//   console.log('Time: ', Date.now());
//   next();
// });
// // define the home page route
// router.get('/', (req: express.Request, res: express.Response) =>
// {
//   var navigator = new navigation.Navigator(req, res);
//
//   res.send('Birds home page');
// });
// // define the about route
// router.get('/about', (req: express.Request, res: express.Response) =>
// {
//   res.send('About bird lets');
// });
//
// module.exports = router;
