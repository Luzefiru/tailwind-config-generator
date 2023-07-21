import { isValidTailwindClass } from './isValidTailwindClass';
import { isValidHexValue } from './isValidHexValue';

/**
 * @param str a string to check if it's a valid Tailwind CSS `theme.extend.colors` JSON object
 * @returns `true` if serializable into a tailwind.config.js file, otherwise `false`
 */
const isValidTailwindJSON = (str: string): boolean => {
  try {
    Object.entries(JSON.parse(str)).forEach(([name, value]) => {
      if (!isValidTailwindClass(name as string)) {
        throw new SyntaxError(
          'Invalid Tailwind Class Name when parsing inputted JSON.'
        );
      } else if (!isValidHexValue(value as string)) {
        throw new SyntaxError('Invalid Hex Value when parsing inputted JSON.');
      }
    });

    return true;
  } catch (err) {
    return false;
  }
};

/**
 * @param json a `theme.extend.colors` JSON object
 * @returns an array of { name, value } pairs to be used as colorUtilities if valid, otherwise throws a SyntaxError
 */
const fromJSON = (json: string) => {
  if (!isValidTailwindJSON(json)) {
    throw new SyntaxError(
      'The JSON is not a valid tailwind.config.js "colors" object.'
    );
  }

  const nameValuePairs = Object.entries(JSON.parse(json)).map(
    ([name, value]) => {
      return { name, value };
    }
  );

  return nameValuePairs;
};

const GenerateColorUtilities = { fromJSON };
export default GenerateColorUtilities;
