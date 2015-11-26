/// <reference path="../../../typings/amplifyjs/amplifyjs.d.ts"/>

import * as express from "express";
import * as crossroads from "crossroads";
import * as navigation from "../../navigation/cross-route";

var amplify = require("amplifier");

var router = express.Router();

export class postBlogService
{
  public static routeName: string = "POST:blog-post";
  constructor()
  {
    amplify.subscribe(postBlogService.routeName, this, this.getRouted);
  }

  public getRouted(req: express.Request, res: express.Response, next, params)
  {
    console.log("Getting routed POST " + JSON.stringify(req.body));
    var serviceResponse = { postoutid: params, postoutbody : req.body };
    res.json(serviceResponse);
  }
}
