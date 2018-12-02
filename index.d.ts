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

declare const Walls: React.ComponentType<any>

export const Link: React.ComponentType<LinkProps>
export const NavLink: React.ComponentType<NavLinkProps>
export const Redirect: React.ComponentType<RedirectProps>
export const matchPath: <Params extends { [K in keyof Params]?: string }>(
  pathname: string,
  props: string | RouteProps,
  parent?: match<Params> | null
) => match<Params> | null;
export const withRouter: (component: React.ComponentType<any>) =>
  React.ComponentType<any>;

export default Walls
