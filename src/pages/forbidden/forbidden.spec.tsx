import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Forbidden from './forbidden.view';

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

const mockNavigate = vi.fn();

describe('Forbidden', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('deve renderizar todos os elementos corretamente', () => {
    render(<Forbidden />);

    expect(screen.getByText('shared:forbidden.title')).toBeInTheDocument();
    expect(screen.getByText('shared:forbidden.subtitle')).toBeInTheDocument();
    expect(
      screen.getByText('shared:forbidden.description')
    ).toBeInTheDocument();

    expect(
      screen.getByText('shared:forbidden.buttons.back')
    ).toBeInTheDocument();
    expect(
      screen.getByText('shared:forbidden.buttons.support')
    ).toBeInTheDocument();
  });

  it('deve navegar para a home ao clicar no botão voltar', () => {
    render(<Forbidden />);

    const backButton = screen.getByText('shared:forbidden.buttons.back');
    fireEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('deve navegar para contato ao clicar no botão suporte', () => {
    render(<Forbidden />);

    const supportButton = screen.getByText('shared:forbidden.buttons.support');
    fireEvent.click(supportButton);

    expect(mockNavigate).toHaveBeenCalledWith('/contato');
  });
});
