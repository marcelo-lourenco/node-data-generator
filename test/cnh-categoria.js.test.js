import { describe, test } from 'node:test';
import { strictEqual, ok } from 'node:assert';
import { cnhCategoria } from 'gerador-br';

describe('cnhCategoria', () => {
  test('should generate a valid driver\'s license category', () => {
    const categoria = cnhCategoria();
    strictEqual(categoria.length > 0, true, 'The driver\'s license category should have a length greater than 0.');
  });
  test('should be a string', () => {
    strictEqual(typeof cnhCategoria(), 'string', 'The driver\'s license category should be a string.');
  });
});