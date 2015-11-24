import * as express from "express";

export class routedServiceBase
{
  public route: string;
  public request: express.Request;
  public response: express.Response;
  public routeParams: any;
  constructor(route: string)
  {
    this.route = route;
  }

  public routed (req :express.Request, res: express.Response, next, params)
  {
    this.request = req;
    this.response = res;
    this.routeParams = params;
    console.log("id: " + JSON.stringify(params));

    if (req.method == "GET")
    {
      console.log("doing my GET stuff");
      this.getRouted(req, res, next, params);
    }
    else if (req.method == "POST")
    {
      console.log("doing my GET stuff");
      this.postRouted(req, res, next, params);
    }
    //res.send(serviceResponse);
  }

  public getRouted(req :express.Request, res: express.Response, next, params)
  {
  }
  public postRouted(req :express.Request, res: express.Response, next, params)
  {
  }

}
