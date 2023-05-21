const md5 = require('md5');

export default function hash(str: string): string {
  return md5(str);
}
