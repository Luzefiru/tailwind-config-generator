import generateTailwindConfig from './GenerateTailwindConfig';
import GenerateObject from './GenerateObject';

describe('generateTailwindConfig', () => {
  it('should create a formatted tailwind.config.js file', () => {
    const input1 = ['./src/**/*.{js,jsx,ts,tsx}'];
    const input2 = GenerateObject.colors([
      { name: 'ruby', value: 'hsl(337, 86%, 47%)' },
      { name: 'off-white', value: 'rgba(250, 249, 246, 1)' },
    ]);

    const result = generateTailwindConfig(input1, input2);
    const expectedOutput = `/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "ruby": "hsl(337, 86%, 47%)",
        "off-white": "rgba(250, 249, 246, 1)"
      }
    }
  },
  "plugins": []
}`;

    expect(result).toBe(expectedOutput);
  });

  it('should handle undefined inputs', () => {
    const input1 = undefined;
    const input2 = undefined;

    const result = generateTailwindConfig(input1, input2);

    const expectedOutput = `/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [],
  "theme": {
    "extend": {}
  },
  "plugins": []
}`;

    expect(result).toBe(expectedOutput);
  });

  it('should handle undefined content blobs, but a valid extend object', () => {
    const input1 = undefined;
    const input2 = GenerateObject.colors([
      { name: 'ruby', value: 'hsl(337, 86%, 47%)' },
      { name: 'off-white', value: 'rgba(250, 249, 246, 1)' },
    ]);

    const result = generateTailwindConfig(input1, input2);
    const expectedOutput = `/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [],
  "theme": {
    "extend": {
      "colors": {
        "ruby": "hsl(337, 86%, 47%)",
        "off-white": "rgba(250, 249, 246, 1)"
      }
    }
  },
  "plugins": []
}`;

    expect(result).toBe(expectedOutput);
  });

  it('should handle valid content blobs, but undefined extend objects', () => {
    const input1 = ['./src/**/*.{js,jsx,ts,tsx}'];
    const input2 = undefined;

    const result = generateTailwindConfig(input1, input2);

    const expectedOutput = `/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {}
  },
  "plugins": []
}`;

    expect(result).toBe(expectedOutput);
  });
});
