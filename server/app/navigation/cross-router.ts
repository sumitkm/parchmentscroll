// This is the routing middleware that uses crossroads.js
/// <reference path="../../typings/crossroads/crossroads.d.ts"/>

import * as express from "express";
import * as crossroads from "crossroads";
import * as navigation from "./route-registry";
import * as gb from "../services/blog/get-blog";
import * as pb from "../services/blog/post-blog";

var amplify = require("amplifier");

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

    var registry = new navigation.routeRegistry();
    for (let i = 0; i <registry.routes.length; i++)
    {
      var currentRoute = registry.routes[i];
      crossroads.addRoute(currentRoute.route, (req :express.Request, res: express.Response, next, params) =>
      {
          console.log("params: " + JSON.stringify(params));
          amplify.publish(req.method+":"+currentRoute.name, req, res, next, params);
      });
    }
  }

  // All routes that start with /api are sent to this function.
  // This is as per the middleware configuration in app.ts
  // e.g.
  //  var navigator = require("./navigation/cross-router");
  //  var nav = new navigator.crossRouter();
  //  app.use('/api', nav.route);
  public route = (req: express.Request, res: express.Response, next: any) =>
  {
    console.log("crossRouter: Requested Url:" + req.url );
    try
    {
      crossroads.parse(req.url, [req, res, next]);
    }
    catch (e)
    {
      console.log("Parse blew up: " + typeof(e));
    }
    next();
  }
}
