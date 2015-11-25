/// <reference path="../../../typings/amplifyjs/amplifyjs.d.ts"/>

import * as express from "express";
import * as crossroads from "crossroads";
import * as navigation from "../../navigation/cross-route";


var amplify = require("amplifier");

var router = express.Router();

export class postBlogService
{
  public static route: navigation.crossRoute = new navigation.crossRoute("/blog/{id}", "post-blog-post", "POST");
  constructor()
  {
    amplify.subscribe(postBlogService.route.name, this, this.getRouted);
  }


  public getRouted(req: express.Request, res: express.Response, next, params)
  {
    console.log("Getting routed POST");
    var serviceResponse = { id: params };
    // call super.routed only once you have all the data and
    // and want ready return a serviceResponse
    res.send(serviceResponse);

  }
}
