import { datetime, exists, t } from '.';
import '@/app/i18n';
import { describe, expect, it, vi } from 'vitest';

vi.mock(import('@/app/i18n'), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
  };
});

describe('i18n', () => {
  it('deve retornar a data e hora atual', () => {
    const currentDatetime = datetime();
    expect(currentDatetime.isValid()).toBe(true);
  });

  it('deve retornar a data e hora atual em um formato específico', () => {
    const currentDatetime = '2024-09-10T12:00:00Z';
    expect(datetime(currentDatetime).format('DD/MM/YYYY')).toBe('10/09/2024');
  });

  it('deve traduzir uma chave usando i18n', () => {
    const translatedText = t('key');
    expect(translatedText).toBe('key');
  });

  it('deve validar se a chave existe', () => {
    expect(exists('key')).toBe(false);
  });
});
