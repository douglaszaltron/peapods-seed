import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Forbidden = lazy(() => import('./forbidden.view'));

export const ForbiddenRoutes = {
  index: '/nao-autorizado',
};

const root: RouteObject[] = [
  {
    index: true,
    path: ForbiddenRoutes.index,
    element: <Forbidden />,
  },
];

export default root;
