import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { PageError } from './';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('PageError', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('deve renderizar todos os elementos corretamente', () => {
    render(<PageError />);

    expect(screen.getByText('shared:pageError.title')).toBeInTheDocument();
    expect(screen.getByText('shared:pageError.subtitle')).toBeInTheDocument();
    expect(
      screen.getByText('shared:pageError.description')
    ).toBeInTheDocument();
    expect(
      screen.getByText('shared:pageError.buttons.back')
    ).toBeInTheDocument();
    expect(
      screen.getByText('shared:pageError.buttons.support')
    ).toBeInTheDocument();
  });

  it('deve navegar para a home ao clicar no botão voltar', () => {
    render(<PageError />);

    const backButton = screen.getByText('shared:pageError.buttons.back');
    fireEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('deve navegar para contato ao clicar no botão suporte', () => {
    render(<PageError />);

    const supportButton = screen.getByText('shared:pageError.buttons.support');
    fireEvent.click(supportButton);

    expect(mockNavigate).toHaveBeenCalledWith('/contato');
  });
});
