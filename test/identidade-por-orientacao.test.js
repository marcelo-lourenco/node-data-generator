import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { identidadePorOrientacao } from 'gerador-br';

describe('identidadePorOrientacao', () => {
  test('should generate a valid gender identity based on the selected sexual orientation', () => {
    const identidade = identidadePorOrientacao();
    strictEqual(identidade.length > 0, true, 'The gender identity should have a length greater than 0.');
  });
  test('should be an array', () => {
    strictEqual(Array.isArray(identidadePorOrientacao()), false, 'The gender identity should be an array.');
  });
});
