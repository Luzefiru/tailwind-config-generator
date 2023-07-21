/**
 * @param str a string to check
 * @returns `true` if the string is a valid CSS hex value, otherwise returns `false`
 */
export function isValidHexValue(str: string): boolean {
  const regex: RegExp = /^#[0-9A-Fa-f]{6}$/;

  return regex.test(str);
}
