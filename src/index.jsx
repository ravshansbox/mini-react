import { createElement, createRoot } from '@/lib';

const element = (
  <h1 id="message">
    Hello, <i>World</i>
  </h1>
);

createRoot(document.getElementById('root')).render(element);
