import * as express from "express";
import * as navigation from "./cross-route";

export class routeRegistry
{
  public routes = new Array<navigation.crossRoute>();

  constructor()
  {
    this.routes.push(new navigation.crossRoute("/blog/{id}", "get-blog-post", "GET"));
    this.routes.push(new navigation.crossRoute("/blog/{id}", "post-blog-post", "POST"));
  }
}
