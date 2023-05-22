/**
 * @param className a utility class name to check
 * @returns `true` if the string is a valid tailwind class name, otherwise returns `false`
 */
export function isValidTailwindClass(className: string): boolean {
  const regex: RegExp = /^[a-z]+(-[a-z]+)*$/;
  return regex.test(className);
}
