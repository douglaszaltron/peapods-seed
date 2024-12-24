import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import NotFound from './not-found.view';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('NotFound', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('deve renderizar todos os elementos corretamente', () => {
    render(<NotFound />);

    expect(screen.getByText('shared:notFound.title')).toBeInTheDocument();
    expect(screen.getByText('shared:notFound.subtitle')).toBeInTheDocument();
    expect(screen.getByText('shared:notFound.description')).toBeInTheDocument();
    expect(
      screen.getByText('shared:notFound.buttons.back')
    ).toBeInTheDocument();
    expect(
      screen.getByText('shared:notFound.buttons.support')
    ).toBeInTheDocument();
  });

  it('deve navegar para a home ao clicar no botão voltar', () => {
    render(<NotFound />);

    const backButton = screen.getByText('shared:notFound.buttons.back');
    fireEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('deve navegar para contato ao clicar no botão suporte', () => {
    render(<NotFound />);

    const supportButton = screen.getByText('shared:notFound.buttons.support');
    fireEvent.click(supportButton);

    expect(mockNavigate).toHaveBeenCalledWith('/contato');
  });
});
