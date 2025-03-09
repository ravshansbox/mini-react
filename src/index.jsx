const createElement = (type, props, ...children) => {
  return { type, props: { ...props, children } };
};

const createTextNode = (text) => {
  return document.createTextNode(text);
};

const createElementNode = ({ type, props }) => {
  const domElement = document.createElement(type);
  for (const child of props.children) {
    render(domElement, child);
  }
  return domElement;
};

const render = (domElement, vdomNode) => {
  domElement.appendChild(
    ['string', 'number', 'boolean'].includes(typeof vdomNode)
      ? createTextNode(vdomNode)
      : createElementNode(vdomNode),
  );
};

const createRoot = (domElement) => {
  return {
    render: render.bind(null, domElement),
  };
};

createRoot(document.getElementById('root')).render(<h1 id="message">Hello</h1>);
