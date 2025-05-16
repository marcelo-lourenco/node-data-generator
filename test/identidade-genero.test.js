import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { identidadeGenero } from 'gerador-br';

describe('identidadeGenero', () => {
  test('should generate a valid gender identity', () => {
    const identidade = identidadeGenero();
    strictEqual(identidade.length > 0, true, 'The gender identity should have a length greater than 0.');
  });
  test('should be a string', () => {
    strictEqual(typeof identidadeGenero(), 'string', 'The gender identity should be a string.');
  });
});