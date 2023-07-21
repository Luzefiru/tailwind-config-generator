import CodeBlock from './components/CodeBlock/CodeBlock';
import Colors from './components/Colors/Colors';
import ImportColorsDialog from './components/Colors/ImportColorsDialog';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

import GenerateObject from './utils/GenerateObject';
import generateTailwindConfig from './utils/GenerateTailwindConfig';

import Logo from './assets/logo.jpg';

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
      <header className="flex items-center justify-between h-16 px-3 mb-10 border-b-2 md:px-6 bg-zinc-50">
        <div className="flex items-center gap-3">
          <img
            className="relative bottom-[0.125rem]"
            src={Logo}
            alt="Logo"
            width="40px"
            height="40px"
          />
          <span className="text-lg md:text-2xl font-bold text-[#1f305f]">
            Tailwind&nbsp;Design&nbsp;System
          </span>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            className="hidden gap-1 p-1 pl-2 font-bold transition-colors rounded-md md:flex hover:bg-zinc-200"
            href="https://github.com/Luzefiru/tailwind-config-generator"
          >
            Luzefiru
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <title>GitHub</title>
              <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
            </svg>
          </a>
        </div>
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
