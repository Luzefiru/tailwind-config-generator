import '../CodeBlock/CodeBlock.css';
import { useState } from 'react';
import GenerateColorUtilities from '../../utils/GenerateColorUtilities';
import { toast } from 'react-toastify';

type ColorUtilities = { name: string; value: string }[];

interface PropTypes {
  className: string;
  handleClose: () => void;
  importColorUtilities: (arg: ColorUtilities) => void;
}

export default function ImportColorsDialog({
  className,
  handleClose,
  importColorUtilities,
}: PropTypes) {
  const [content, setContent] = useState('');

  const handleCancel = () => {
    setContent('');
    handleClose();
  };

  const handleSubmit = () => {
    try {
      const colorUtilities = GenerateColorUtilities.fromJSON(content);
      importColorUtilities(colorUtilities as ColorUtilities);
      toast.success('Successfully imported JSON.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      handleCancel();
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
    }
  };

  return (
    <>
      <div
        onClick={handleCancel}
        className={`cover bg-zinc-700 z-30 opacity-40 ${className}`}
      />
      <section className={`dialog fade-in z-40 ${className}`}>
        <div className="flex flex-col p-6 rounded-lg bg-neutral-100 relative w-[80vw] -ml-[40vw] h-[80vh] -mt-[40vh] lg:w-[40vw] lg:-ml-[20vw]">
          <h2 className="mb-3 text-3xl font-bold text-center">
            Import from JSON
          </h2>
          <textarea
            className="code-dialog h-full p-3 rounded-lg resize-none bg-[#272822] text-neutral-100"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={placeholderJSON}
            spellCheck="false"
          ></textarea>
          <div
            aria-label="Buttons"
            className="flex justify-end gap-4 pt-4 mt-auto"
          >
            <button
              onClick={handleCancel}
              className="text-[0.7rem] sm:text-base shadow-sm border-2 px-5 py-[0.4rem] rounded-md font-medium transition-colors border-red-600 text-red-600 hover:bg-red-700 hover:border-red-700 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="text-[0.7rem] sm:text-base shadow-sm border-2 px-5 py-[0.4rem] rounded-md font-medium transition-colors border-emerald-500 text-white bg-emerald-500 hover:bg-emerald-700 hover:border-emerald-700"
            >
              Import
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

var placeholderJSON = `{
  "primary": "#6300ef",
  "primary-variant": "#3701b2",
  "secondary": "#02dbc6",
  "secondary-variant": "#018786",
  "error": "#b10021",
  "background": "#fefffe",
  "on-background": "#010001"
}
`;
