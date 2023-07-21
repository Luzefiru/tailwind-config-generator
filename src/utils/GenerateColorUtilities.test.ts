import GenerateColorUtilities from './GenerateColorUtilities';

describe('GenerateColorUtilities.fromJSON', () => {
  it('should successfully import a valid `theme.extend.colors` object', () => {
    expect(
      GenerateColorUtilities.fromJSON(`{
      "primary": "#6300ef",
      "primary-variant": "#3701b2"
    }`)
    ).toEqual([
      { name: 'primary', value: '#6300ef' },
      { name: 'primary-variant', value: '#3701b2' },
    ]);
  });

  it('should throw a SyntaxError on bad Tailwind class names', () => {
    expect(() => {
      GenerateColorUtilities.fromJSON(`{
      "prim    ary": "#6300ef",
    }`);
    }).toThrowError(SyntaxError);
  });

  it('should throw a SyntaxError on bad hex value colors', () => {
    expect(() => {
      GenerateColorUtilities.fromJSON(`{
      "primary": "6300ef",
    }`);
    }).toThrowError(SyntaxError);
  });
});
