/// <reference path="../../../typings/amplifyjs/amplifyjs.d.ts"/>

import * as express from "express";
import * as crossroads from "crossroads";
import * as navigation from "../../navigation/cross-route";
import * as azureStorage from "../../storage/azure-blob-repository";
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
    var repo = new azureStorage.azureBlobRepository();
    repo.saveToBlob(params, req.body);
    var serviceResponse = { postoutid: params, postoutbody : req.body };
    res.json(serviceResponse);
  }
}
