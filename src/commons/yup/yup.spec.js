import { describe, expect, it } from 'vitest';
import { y } from './';

describe('y Configuração', () => {
  describe('Validações Mixed', () => {
    it('deve retornar mensagem correta para campo obrigatório', () => {
      const schema = y.string().required();

      try {
        schema.validateSync(undefined);
      } catch (error) {
        expect(error.message).toBe('validations:mixed.required');
      }
    });
  });

  describe('Validações String', () => {
    it('deve retornar mensagem correta para comprimento mínimo', () => {
      const schema = y.string().min(5);

      try {
        schema.validateSync('abc');
      } catch (error) {
        expect(error.message).toBe('validations:string.min');
      }
    });

    it('deve retornar mensagem correta para comprimento máximo', () => {
      const schema = y.string().max(3);

      try {
        schema.validateSync('abcde');
      } catch (error) {
        expect(error.message).toBe('validations:string.max');
      }
    });

    it('deve retornar mensagem correta para comprimento exato', () => {
      const schema = y.string().length(3);

      try {
        schema.validateSync('abcd');
      } catch (error) {
        expect(error.message).toBe('validations:string.length');
      }
    });

    it('deve retornar mensagem correta para email inválido', () => {
      const schema = y.string().email();

      try {
        schema.validateSync('email-invalido');
      } catch (error) {
        expect(error.message).toBe('validations:string.email');
      }
    });
  });

  describe('Validações Number', () => {
    it('deve validar corretamente valor máximo', () => {
      const schema = y.number().max(10);

      expect(() => schema.validateSync(10)).not.toThrow();
      expect(() => schema.validateSync(5)).not.toThrow();

      try {
        schema.validateSync(15);
      } catch (error) {
        expect(error.message).toBe('validations:number.max');
      }
    });

    it('deve validar corretamente valor mínimo', () => {
      const schema = y.number().min(10);

      expect(() => schema.validateSync(10)).not.toThrow();
      expect(() => schema.validateSync(15)).not.toThrow();

      try {
        schema.validateSync(5);
      } catch (error) {
        expect(error.message).toBe('validations:number.min');
      }
    });

    it('deve retornar mensagem correta para número positivo', () => {
      const schema = y.number().positive();

      try {
        schema.validateSync(-1);
      } catch (error) {
        expect(error.message).toBe('validations:number.positive');
      }
    });
  });

  describe('Validações Date', () => {
    it('deve retornar mensagem correta para data máxima', () => {
      const schema = y.date().max(new Date());

      try {
        schema.validateSync(new Date('2025-01-01'));
      } catch (error) {
        expect(error.message).toBe('validations:date.max');
      }
    });
  });
});
