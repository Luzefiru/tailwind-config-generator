import { isValidHexValue } from './isValidHexValue';

describe('isValidHexValue', () => {
  it('should return true for valid CSS hex values with hash symbol', () => {
    expect(isValidHexValue('#123456')).toBe(true);
    expect(isValidHexValue('#abcdef')).toBe(true);
    expect(isValidHexValue('#ABCDEF')).toBe(true);
    expect(isValidHexValue('#000000')).toBe(true);
    expect(isValidHexValue('#FFFfff')).toBe(true);
  });

  it('should return false for invalid CSS hex values', () => {
    // Missing hash symbol
    expect(isValidHexValue('123456')).toBe(false);
    expect(isValidHexValue('abcdef')).toBe(false);
    expect(isValidHexValue('ABCDEF')).toBe(false);
    expect(isValidHexValue('000000')).toBe(false);
    expect(isValidHexValue('FFFfff')).toBe(false);

    // Invalid characters
    expect(isValidHexValue('#12345G')).toBe(false);
    expect(isValidHexValue('#GGGGGG')).toBe(false);
    expect(isValidHexValue('#hello')).toBe(false);
    expect(isValidHexValue('#123abc!')).toBe(false);

    // Too many characters
    expect(isValidHexValue('#1234567')).toBe(false);
    expect(isValidHexValue('#ABCDEF123')).toBe(false);

    // Additional edge cases
    expect(isValidHexValue('')).toBe(false); // Empty string
    expect(isValidHexValue('#')).toBe(false); // Only hash symbol
    expect(isValidHexValue('ABCDEF')).toBe(false); // No hash symbol
    expect(isValidHexValue('# 123456')).toBe(false); // Whitespace in the string
    expect(isValidHexValue(null as any)).toBe(false); // Null input
    expect(isValidHexValue(undefined as any)).toBe(false); // Undefined input
  });
});
