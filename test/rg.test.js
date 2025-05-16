import { describe, test } from 'node:test';
import { strictEqual, ok } from 'node:assert';
import { rg } from 'gerador-br';

describe('RG Generator', () => {
  test('should generate a valid RG with mask', () => {
    const rgWithMask = rg(true);
    strictEqual(rgWithMask.length, 12); // 9 digits + 2 separators + 1 hyphen
    ok(rgWithMask.match(/\d/g).length <= 9, true); // 9 digits
    strictEqual(rgWithMask.match(/\./g).length, 2); // 2 dots
    strictEqual(rgWithMask.match(/-/g).length, 1); // 1 hyphen
  });

  test('should generate a valid RG without mask', () => {
    const rgWithoutMask = rg(false);
    ok(rgWithoutMask.length <= 9, true); // 9 dig
    ok(rgWithoutMask.match(/\d/g).length <= 9, true); // 9 dig
  });
});
