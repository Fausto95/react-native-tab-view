import type { Route } from './types';

type RoutesMap = {
  [key in Route['key']]: JSX.Element | null;
};

export function TabViewSceneMap(routes: RoutesMap) {
  return ({ key }: { key: Route['key'] }) => {
    const currentRoute = routes[key];
    return currentRoute;
  };
}
