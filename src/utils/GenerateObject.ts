interface NameValue {
  name: string;
  value: string;
}

interface ExtendObject {
  [key: string]: string;
}

interface NamedExtendObject {
  name: string;
  value: ExtendObject;
}

/** A module containing all the functions to generate `exports.theme.extend` objects */
const GenerateObject = (function () {
  /**
   * Flattens an array of Objects with name & value properties into a single `colors` object
   * to be injected in `tailwind.config.js`'s exports.theme.extend.colors
   *
   * @param arr an array of `NameValue`s that correspond to a Tailwind Utility Class's alias:value
   * @returns a `colors` object to be extended in `tailwind.config.js`
   */
  const colors = (arr: NameValue[]): NamedExtendObject => {
    const newColorsObject: ExtendObject = {};
    arr.forEach((entry: NameValue) => {
      newColorsObject[entry.name] = entry.value;
    });
    return { name: 'colors', value: newColorsObject };
  };

  return { colors };
})();

export default GenerateObject;
