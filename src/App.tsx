import CodeBlock from './components/ui/CodeBlock';
import Colors from './components/Colors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

import GenerateObject from './utils/GenerateObject';
import generateTailwindConfig from './utils/GenerateTailwindConfig';

export default function App() {
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

  return (
    <div className="App">
      <header className="bg-zinc-50 h-16 mb-10 flex justify-center items-center border-b-2">
        <div className="text-3xl font-semibold">Tailwind Design System</div>
      </header>
      <main className="grid grid-cols-1 xl:grid-cols-12 mx-4 md:mx-10 lg:mx-16">
        <section
          aria-label="Design System Configuration"
          className="col-span-7 xl:mr-16"
        >
          <div className="flex gap-4 mb-10 items-center">
            <h1 className="text-6xl font-semibold">Colors</h1>
            <button
              aria-label="Add a Color"
              title="Add a Color"
              className="rounded-md p-1 hover:bg-zinc-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="2.75rem"
                viewBox="0 0 24 24"
                width="2.75rem"
                fill="currentColor"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <path d="M14,10H3v2h11V10z M14,6H3v2h11V6z M18,14v-4h-2v4h-4v2h4v4h2v-4h4v-2H18z M3,16h7v-2H3V16z" />
                </g>
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
          className="col-span-5 overflow-y-hidden mt-12 xl:mt-0"
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
