// This is the routing middleware that uses crossroads.js
/// <reference path="../../typings/crossroads/crossroads.d.ts"/>

import * as express from "express";
import * as crossroads from "crossroads";
import * as routingBase from "./routed-service-base";
import * as gb from "../services/blog/get-blog";
import * as pb from "../services/blog/post-blog";
export class crossRouter
{
  private nxt: any;
  private services = [];
  constructor()
  {
    crossroads.ignoreState = true;
  }

  public registerRoutes = ()=>
  {
    // Ideally all the routes will be specified in an array.
    // The constructor will simply loop through the array
    // and add the route to crossroads along with relevant
    // details required to fire off a handler that gets the data
    // that the api will eventually return

    //TODO: This is still ad hoc. Move it out to a register

    var gbs = new gb.getBlogService();
    var pbs = new pb.postBlogService();

    crossroads.bypassed.add((url)=>
    {
      console.log("bypassed: " + url)
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
    console.log('crossRouter: ' + crossroads.getNumRoutes() + " routes registered. Request Url:" + req.url );
    try
    {
      crossroads.parse(req.url, [req, res, next]);
    }
    catch (e)
    {
      console.log("Parse blew up: " + JSON.stringify(e));
    }
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
