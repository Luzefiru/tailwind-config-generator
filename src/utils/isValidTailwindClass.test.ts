import { isValidTailwindClass } from './isValidTailwindClass';

describe('isValidTailwindClass', () => {
  it('should return true for `nohyphen`', () => {
    const result: boolean = isValidTailwindClass('nohyphen');

    expect(result).toBeTruthy();
  });

  it('should return true for `with-hyphen`', () => {
    const result: boolean = isValidTailwindClass('with-hyphen');

    expect(result).toBeTruthy();
  });

  it('should return false for `invalid class`', () => {
    const result: boolean = isValidTailwindClass('invalid class');

    expect(result).toBeFalsy();
  });

  it('should return false for international characters `我爱你`', () => {
    const result: boolean = isValidTailwindClass('我爱你');

    expect(result).toBeFalsy();
  });

  it('should return false for underscore delimeters `invalid_class`', () => {
    const result: boolean = isValidTailwindClass('invalid_class');

    expect(result).toBeFalsy();
  });
});
