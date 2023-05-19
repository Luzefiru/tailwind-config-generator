import GenerateObject from './GenerateObject';

describe('colors', () => {
  it('should create an object containing name:value pairs of an array of name:value pairs', () => {
    const result = GenerateObject.colors([
      { name: 'ruby', value: '#E0115F' },
      { name: 'off-white', value: '#FAF9F6' },
    ]);

    const expectedOutput = {
      ruby: '#E0115F',
      'off-white': '#FAF9F6',
    };

    expect(result).toEqual(expectedOutput);
  });

  it('should handle CSS function values', () => {
    const result = GenerateObject.colors([
      { name: 'ruby', value: 'hsl(337, 86%, 47%)' },
      { name: 'off-white', value: 'rgba(250, 249, 246, 1)' },
    ]);

    const expectedOutput = {
      ruby: 'hsl(337, 86%, 47%)',
      'off-white': 'rgba(250, 249, 246, 1)',
    };

    expect(result).toEqual(expectedOutput);
  });
});
