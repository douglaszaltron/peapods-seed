import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const NotFound = lazy(() => import('./not-found.view'));

const NotFoundRoutes = {
  Index: '*',
};

const root: RouteObject[] = [
  {
    index: true,
    path: NotFoundRoutes.Index,
    element: <NotFound />,
  },
];

export { NotFoundRoutes };
export default root;
