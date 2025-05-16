import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { renavam } from 'gerador-br';

describe('RENAVAM Generator', () => {
  test('should generate a valid RENAVAM number', () => {
    strictEqual(renavam().length, 11); // 11 digits
    strictEqual(renavam().match(/\d/g).length, 11); // 11 digits
  });
});
