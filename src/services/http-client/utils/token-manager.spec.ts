import { beforeEach, describe, expect, it } from 'vitest';
import sanctum from './token-manager';

describe('sanctum', () => {
  beforeEach(() => {
    sanctum.clearToken();
  });

  it('deve definir o token corretamente', () => {
    sanctum.setToken('abc123');
    expect(sanctum.getToken()).toBe('abc123');
  });

  it('deve retornar null quando o token é limpo', () => {
    sanctum.setToken('abc123');
    sanctum.clearToken();
    expect(sanctum.getToken()).toBeNull();
  });

  it('deve retornar null se o token não foi definido', () => {
    expect(sanctum.getToken()).toBeNull();
  });
});
