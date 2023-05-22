const md5 = require('md5');

/**
 * Creates an md5 hash string from the inputted string
 */
export default function hash(str: string): string {
  return md5(str);
}
