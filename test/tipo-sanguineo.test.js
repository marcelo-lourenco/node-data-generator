import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { tipoSanguineo } from 'gerador-br';

describe('tipoSanguineo', () => {
  test('should generate a valid blood type', () => {
    const tipo = tipoSanguineo();
    strictEqual(tipo.length > 0, true, 'The blood type should have a length greater than 0.');
  });
  test('should be a string', () => {
    strictEqual(typeof tipoSanguineo(), 'string', 'The blood type should be a string.');
  });
});
