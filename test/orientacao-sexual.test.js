import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { orientacaoSexual } from 'gerador-br';

describe('orientacaoSexualRand', () => {
  test('should generate a valid sexual orientation', () => {
    const orientacao = orientacaoSexual();
    strictEqual(orientacao.length > 0, true, 'The sexual orientation should have a length greater than 0.');
  });
  test('should be a string', () => {
    strictEqual(typeof orientacaoSexual(), 'string', 'The sexual orientation should be a string.');
  });
});