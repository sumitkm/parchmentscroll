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

  public routed (req :express.Request, res: express.Response, next, params, serviceResponse)
  {
    this.request = req;
    this.response = res;
    this.routeParams = params;
    console.log("id: " + JSON.stringify(params));
    res.send(serviceResponse);
  };
}
