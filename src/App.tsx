function App() {
  return (
    <div className="App h-full bg-zinc-100">
      <header className="bg-zinc-50 h-16 mb-10 flex justify-center items-center border-b-2">
        <div className="text-3xl font-semibold">Tailwind Design System</div>
      </header>
      <main className="grid grid-cols-12 mx-16">
        <section className="col-span-7 mr-6">
          <div className="flex gap-4 items-center">
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
        </section>
      </main>
    </div>
  );
}

export default App;
