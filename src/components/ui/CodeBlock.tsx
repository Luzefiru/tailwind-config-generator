import './CodeBlock.css';
import Prism from 'prismjs';
import { useEffect } from 'react';

interface PropTypes {
  content: string;
  className?: string;
}

export default function CodeBlock({ content, className }: PropTypes) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className={className}>
      <code className="language-javascript">{content}</code>
    </pre>
  );
}
