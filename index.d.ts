import React from "react";
import {
  RouteProps,
  match,
} from "react-router";
import {
  LinkProps,
  NavLinkProps,
  RedirectProps,
} from "react-router-dom";

declare const Walls: React.ComponentClass<any>

export const Link: React.ComponentClass<LinkProps, any>
export const NavLink: React.ComponentClass<NavLinkProps, any>
export const Redirect: React.ComponentClass<RedirectProps, any>
export const matchPath: <Params extends { [K in keyof Params]?: string }>(
  pathname: string,
  props: string | RouteProps,
  parent?: match<Params> | null
) => match<Params> | null;
export const withRouter: (component: React.ComponentType<any>) =>
  React.ComponentClass<any>;

export default Walls
