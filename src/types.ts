import type { ReactNode } from 'react';

export type Route = {
  key: string;
  title: string;
};

export type Params = {
  route: Route;
  isActive: boolean;
};

export type RenderTabBar = (params: Params) => ReactNode;
export type RenderScene = (route: Route) => JSX.Element | null;
