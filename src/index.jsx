import { createElement, createRoot } from '@/lib';

const element = (
  <h1 id="message">
    Hello, <i>World</i>
    <button
      onClick={(event) => {
        console.log(event, 'Greetings!');
      }}
    >
      Greet
    </button>
  </h1>
);

createRoot(document.getElementById('root')).render(element);
