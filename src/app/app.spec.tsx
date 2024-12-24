import { render, screen } from '@testing-library/react';
import type { PropsWithChildren } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { App } from '.';

vi.mock('react-router-dom', async () => ({
  ...(await vi.importActual('react-router-dom')),
  BrowserRouter: () => <div>router</div>,
}));

vi.mock('@/pages/homepage/homepage.view', () => {
  return {
    __esModule: true,
    default: () => <div>homepage</div>,
  };
});

vi.mock('@/pages/forbidden/forbidden.view', () => {
  return {
    __esModule: true,
    default: () => <div>forbidden</div>,
  };
});

vi.mock('@/pages/not-found/not-found.view', () => {
  return {
    __esModule: true,
    default: () => <div>not found</div>,
  };
});

describe('AppRoutes', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderWithMemoryRoute = ({ initialEntries = ['/'] }) => {
    const Router = ({ children }: PropsWithChildren) => (
      <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
    );

    return render(<App Router={Router} />);
  };

  it('deve renderizar o navegador', () => {
    render(<App />);

    expect(screen.getByText('router')).toBeInTheDocument();
  });

  it('deve renderizar a página inicial quando a rota é "/"', async () => {
    renderWithMemoryRoute({ initialEntries: ['/'] });

    await screen.findByText('homepage');
  });

  it('deve renderizar a página de não autorizado quando a rota é "/nao-autorizado"', async () => {
    renderWithMemoryRoute({ initialEntries: ['/nao-autorizado'] });

    await screen.findByText('forbidden');
  });

  it('deve renderizar a página não encontrada quando não há rota registrada', async () => {
    renderWithMemoryRoute({ initialEntries: ['/any-page'] });

    await screen.findByText('not found');
  });
});
