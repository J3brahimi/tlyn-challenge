import React, { LazyExoticComponent } from "react";

export interface IRouteWithoutChildren {
  title: string;
  key: string;
  path: string;
  icon?: React.ReactNode | JSX.Element | LucideIcon;
  component: LazyExoticComponent<() => JSX.Element>;
  showInMenu: boolean;
}

export interface IRoute extends IRouteWithoutChildren {
  children?: RouteWithoutChildren[];
}
