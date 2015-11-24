import * as base from "../../navigation/routed-service-base";
import * as express from "express";
import * as crossroads from "crossroads";
var router = express.Router();

export class getBlogService extends base.routedServiceBase {
  public static path: string = "/blog/{id}";
  constructor()
  {
    super(getBlogService.path);

    crossroads.addRoute(getBlogService.path, super.routed);
  }

  public getRouted(req: express.Request, res: express.Response, next, params)
  {
    console.log("Getting routed");
    var serviceResponse = { id: params };
    // call super.routed only once you have all the data and
    // and want ready return a serviceResponse
    res.send(serviceResponse);

  }
}
