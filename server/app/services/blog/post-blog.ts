import * as base from "../../navigation/routed-service-base";
import * as express from "express";
import * as crossroads from "crossroads";
var router = express.Router();

export class postBlogService extends base.routedServiceBase
{
  public static path: string = "/blog/{id}";
  constructor()
  {
    super(postBlogService.path);

    crossroads.addRoute(postBlogService.path, super.routed);
  }

  public postRouted (req :express.Request, res: express.Response, next, params)
  {
    if(req.method == "POST")
    {
      console.log("doing my POST stuff");
      var serviceResponse = { id: params, value: "recieved" };
      res.send(serviceResponse);
    }
  }
}
