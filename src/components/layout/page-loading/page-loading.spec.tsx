import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PageLoading } from './';

describe('PageLoading', () => {
  it('deve renderizar a mensagem de carregamento corretamente', () => {
    render(<PageLoading />);

    const loadingMessage = screen.getByText('shared:pageLoading.message');
    expect(loadingMessage).toBeInTheDocument();
  });
});
