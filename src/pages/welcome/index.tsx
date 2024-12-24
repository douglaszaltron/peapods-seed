import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const Welcome = lazy(() => import('./welcome.view'));

const WelcomeRoutes = {
  Index: '*',
};

const root: RouteObject[] = [
  {
    index: true,
    path: WelcomeRoutes.Index,
    element: <Welcome />,
  },
];

export { WelcomeRoutes };
export default root;
