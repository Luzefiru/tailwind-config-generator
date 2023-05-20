interface ExtendObject {
  [key: string]: string;
}

interface NamedExtendObject {
  name: string;
  value: ExtendObject;
}

interface TailwindConfigObject {
  content: string[];
  theme: {
    extend: { [key: NamedExtendObject['name']]: NamedExtendObject['value'] };
  };
  plugins: string[];
}

export default function generateTailwindConfig(
  contentBlobs: string[] | undefined,
  ...namedExtendObjects: NamedExtendObject[] | undefined[]
): string {
  const header: string = `/** @type {import('tailwindcss').Config} */
module.exports =`;
  const defaultConfig: TailwindConfigObject = {
    content: [],
    theme: { extend: {} },
    plugins: [],
  };

  if (
    contentBlobs &&
    Array.isArray(contentBlobs) &&
    typeof contentBlobs[0] === 'string'
  )
    contentBlobs.forEach((blob) => {
      defaultConfig.content.push(blob);
    });

  if (
    namedExtendObjects &&
    Array.isArray(namedExtendObjects) &&
    typeof namedExtendObjects[0] === typeof sampleNamedExtendObject
  )
    namedExtendObjects.forEach((obj) => {
      if (obj !== undefined) {
        defaultConfig.theme.extend[obj.name] = obj.value;
      }
    });

  return `${header} ${JSON.stringify(defaultConfig, null, 2)}`;
}

var sampleNamedExtendObject = {
  name: 'colors',
  value: {
    ruby: 'hsl(337, 86%, 47%)',
    'off-white': 'rgba(250, 249, 246, 1)',
  },
};
