import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { provedorEmail } from 'gerador-br';

describe('provedorEmailRand', () => {
  test('should generate a valid email provider', () => {
    const provedor = provedorEmail();
    strictEqual(provedor.length > 0, true, 'The email provider should have a length greater than 0.');
  });
  test('should be a string', () => {
    strictEqual(typeof provedorEmail(), 'string', 'The email provider should be a string.');
  });
});
