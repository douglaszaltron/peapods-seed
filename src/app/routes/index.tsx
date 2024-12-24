import forbidden from '@/pages/forbidden';
import notFound from '@/pages/not-found';
import welcome from '@/pages/welcome';
import { useRoutes } from 'react-router-dom';

const routes = [welcome, forbidden, notFound].flat();

export default function AppRoutes() {
  return useRoutes(routes);
}
