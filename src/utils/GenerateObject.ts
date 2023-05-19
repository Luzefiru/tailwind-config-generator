interface NameValue {
  name: string;
  value: string;
}

interface ConfigObject {
  [key: string]: string;
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
  const colors = (arr: NameValue[]) => {
    const newColorsObject: ConfigObject = {};
    arr.forEach((entry: NameValue) => {
      newColorsObject[entry.name] = entry.value;
    });
    return newColorsObject;
  };

  return { colors };
})();

export default GenerateObject;
