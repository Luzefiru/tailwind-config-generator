import CodeBlock from './components/CodeBlock/CodeBlock';
import Colors from './components/Colors/Colors';
import ImportColorsDialog from './components/Colors/ImportColorsDialog';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

import GenerateObject from './utils/GenerateObject';
import generateTailwindConfig from './utils/GenerateTailwindConfig';

export default function App() {
  const [isImportingColors, setIsImportingColors] = useState(false);
  const [colorUtilities, setColorUtilities] = useState([...defaults]);
  const [configCode, setConfigCode] = useState(
    generateTailwindConfig(
      ['./src/**/*.{js,jsx,ts,tsx}'],
      GenerateObject.colors(colorUtilities)
    )
  );

  const handleRefreshDOM = (newColorUtilities: typeof colorUtilities) => {
    setColorUtilities(newColorUtilities);

    setConfigCode(
      generateTailwindConfig(
        ['./src/**/*.{js,jsx,ts,tsx}'],
        GenerateObject.colors(newColorUtilities)
      )
    );
  };

  const handleAddColor = (name: string, value: string) => {
    handleRefreshDOM([...colorUtilities, { name, value }]);
  };

  const handleEditColor = (
    oldName: string,
    newName: string,
    newValue: string
  ) => {
    const newColors = [...colorUtilities];

    newColors.forEach((obj) => {
      if (obj.name === oldName) {
        obj.name = newName;
        obj.value = newValue;
      }
    });

    handleRefreshDOM(newColors);
  };

  const handleDeleteColor = (nameToDelete: string) => {
    const newColors = [...colorUtilities].filter(
      (obj) => obj.name !== nameToDelete
    );

    handleRefreshDOM(newColors);
  };

  const importColorUtilities = (colors: typeof colorUtilities) => {
    handleRefreshDOM(colors);
  };

  return (
    <div className="App">
      <header className="flex items-center justify-center h-16 mb-10 border-b-2 bg-zinc-50">
        <div className="text-3xl font-semibold">Tailwind Design System</div>
      </header>
      <main className="grid grid-cols-1 mx-4 xl:grid-cols-12 md:mx-10 lg:mx-16">
        <section
          aria-label="Design System Configuration"
          className="col-span-7 xl:mr-16"
        >
          <div className="flex items-center gap-4 mb-10">
            <h1 className="text-6xl font-bold">Colors</h1>
            <ImportColorsDialog
              className={isImportingColors ? 'block' : 'hidden'}
              importColorUtilities={importColorUtilities}
              handleClose={() => {
                setIsImportingColors(!isImportingColors);
              }}
            />
            <button
              onClick={() => {
                setIsImportingColors(true);
              }}
              aria-label="Add a Color"
              title="Add a Color"
              className="relative p-1 transition-colors rotate-90 rounded-md hover:bg-zinc-200 top-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="2.75rem"
                width="2.75rem"
              >
                <title>Import Colors</title>
                <path d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
              </svg>
            </button>
          </div>
          <Colors
            colorUtilities={colorUtilities}
            handleAddColor={handleAddColor}
            handleEditColor={handleEditColor}
            handleDeleteColor={handleDeleteColor}
          />
        </section>
        <section
          aria-label="Outputted Tailwind Configuration File"
          className="z-0 col-span-5 mt-12 overflow-y-hidden xl:mt-0"
        >
          <CodeBlock content={configCode} />
        </section>
      </main>
      <footer className="pt-10"></footer>
      <ToastContainer />
    </div>
  );
}

var defaults = [
  { name: 'primary', value: '#6300ef' },
  { name: 'primary-variant', value: '#3701b2' },
  { name: 'secondary', value: '#02dbc6' },
  { name: 'secondary-variant', value: '#018786' },
  { name: 'error', value: '#b10021' },
  { name: 'background', value: '#fefffe' },
  { name: 'on-background', value: '#010001' },
];
