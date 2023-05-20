import CodeBlock from './components/ui/CodeBlock';
import ColorCard from './components/ColorCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className="App">
      <header className="bg-zinc-50 h-16 mb-10 flex justify-center items-center border-b-2">
        <div className="text-3xl font-semibold">Tailwind Design System</div>
      </header>
      <main className="grid grid-cols-1 xl:grid-cols-12 mx-4 md:mx-10 lg:mx-16">
        <section className="col-span-7 xl:mr-16">
          <div className="flex gap-4 mb-10 items-center">
            <h1 className="text-6xl font-semibold">Colors</h1>
            <button className="rounded-md p-1 hover:bg-zinc-200 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
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
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-y-10 px-4 md:p-0">
            <ColorCard name="soft-orange" value="hsl(35, 77%, 62%)" />
            <ColorCard name="soft-red" value="hsl(5, 85%, 63%)" />
            <ColorCard name="off-white" value="hsl(36, 100%, 99%)" />
            <ColorCard name="grayish-blue" value="hsl(233, 8%, 79%)" />
            <ColorCard name="dark-grayish-blue" value="hsl(236, 13%, 42%)" />
            <ColorCard name="very-dark-blue" value="hsl(240, 100%, 5%)" />
          </div>
        </section>
        <section className="col-span-5 overflow-y-hidden mt-12 xl:mt-0">
          <CodeBlock className="h-[80vh] rounded-lg" content={code} />
        </section>
      </main>
      <footer className="pt-10"></footer>
      <ToastContainer />
    </div>
  );
}

var code = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-orange': 'hsl(35, 77%, 62%)',
        'soft-red': 'hsl(5, 85%, 63%)',
        'off-white': 'hsl(36, 100%, 99%)',
        'grayish-blue': 'hsl(233, 8%, 79%)',
        'dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'very-dark-blue': 'hsl(240, 100%, 5%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui'],
      },
      fontSize: {
        base: '15px',
      },
    },
  },
  plugins: [],
};
`;
