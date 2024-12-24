import { describe, expect, it } from 'vitest';
import { ApiError } from './api-error';

describe('ApiError', () => {
  it('deve criar uma instância com todos os campos obrigatórios', () => {
    const slug = 'erro-exemplo';
    const message = 'Mensagem de erro';

    const error = new ApiError(slug, message);

    expect(error.slug).toBe(slug);
    expect(error.message).toBe(message);
    expect(error.details).toBeUndefined();
  });

  it('deve criar uma instância com detalhes opcionais', () => {
    const slug = 'erro-exemplo';
    const message = 'Mensagem de erro';
    const details = [
      { field: 'email', message: 'Email inválido', slug: 'erro-exemplo' },
      { field: 'senha', message: 'Senha muito curta', slug: 'erro-exemplo' },
    ];

    const error = new ApiError(slug, message, details);

    expect(error.slug).toBe(slug);
    expect(error.message).toBe(message);
    expect(error.details).toEqual(details);
  });

  it('deve implementar a interface ApiException corretamente', () => {
    const error = new ApiError('slug-teste', 'mensagem teste');

    expect(error).toHaveProperty('slug');
    expect(error).toHaveProperty('message');
    expect(error).toHaveProperty('details');
  });
});
