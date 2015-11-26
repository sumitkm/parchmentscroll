/// <reference path="../../../typings/amplifyjs/amplifyjs.d.ts"/>

import * as express from "express";
import * as crossroads from "crossroads";
import * as navigation from "../../navigation/cross-route";

var amplify = require("amplifier");

var router = express.Router();

export class getBlogService
{
  public static routeName: string = "GET:blog-post";
  constructor()
  {
    amplify.subscribe(getBlogService.routeName, this, this.getRouted);
  }


  public getRouted(req: express.Request, res: express.Response, next, params)
  {
    var serviceResponse = { getoutid: params, something: "someotherthing" };
    res.send(serviceResponse);
  }
}
