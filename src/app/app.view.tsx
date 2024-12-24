import { BrowserRouter } from 'react-router-dom';
import Providers from './providers';
import AppRoutes from './routes';

export default function App({ Router = BrowserRouter }) {
  return (
    <Providers>
      <Router>
        <AppRoutes />
      </Router>
    </Providers>
  );
}
