import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { corPele } from 'gerador-br';

describe('corPele', () => {
  test('should generate a valid skin color', () => {
    const cor = corPele();
    strictEqual(cor.length > 0, true, 'The skin color should have a length greater than 0.');
  });
  test('should be a string', () => {
    strictEqual(typeof corPele(), 'string', 'The skin color should be a string.');
  });
});
