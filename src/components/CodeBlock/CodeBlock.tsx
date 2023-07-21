import './CodeBlock.css';
import Prism from 'prismjs';
import { useEffect } from 'react';
import copyTextToClipboard from '../../utils/copyTextToKeyboard';

interface PropTypes {
  content: string;
}

export default function CodeBlock({ content }: PropTypes) {
  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  return (
    <>
      <pre
        aria-label="Your Tailwind CSS Configuation File"
        className="relative h-[80vh] rounded-lg -z-10"
      >
        <code className="language-javascript">{content}</code>
        <button
          onClick={() => {
            copyTextToClipboard(content);
          }}
          className="hidden md:block p-4 absolute top-0 right-0 text-stone-600 hover:text-zinc-100"
          aria-label="Copy to Clipboard"
          title="Copy to Clipboard"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="currentColor"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
          </svg>
        </button>
      </pre>
      <button
        onClick={() => {
          copyTextToClipboard(content);
        }}
        className="md:hidden flex text-lg items-center justify-center gap-2 w-full font-semibold py-[0.75rem] p-[0.5rem] mt-4 rounded-md hover:bg-zinc-200 transition-colors"
        aria-label="Copy to Clipboard"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
        </svg>
        Copy to Clipboard
      </button>
    </>
  );
}
