import { toast } from 'react-toastify';

export default async function copyTextToClipboard(text: string) {
  if ('clipboard' in navigator) {
    await navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard.', {
      position: 'bottom-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return true;
  } else {
    document.execCommand('copy', true, text);
    toast.success('Copied to clipboard.', {
      position: 'bottom-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return true;
  }
}
