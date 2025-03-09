const createElement = (type, props, ...children) => {
  return { type, props: { ...props, children } };
};

const createTextNode = (text) => {
  return document.createTextNode(text);
};

const isEvent = (prop) => {
  return /^on[A-Z]/.test(prop);
};

const propToEvent = (prop) => {
  return prop.match(/^on(.+)$/)[1].toLowerCase();
};

const createElementNode = ({ type, props: { children, ...props } }) => {
  const domElement = document.createElement(type);
  for (const prop in props) {
    if (isEvent(prop)) {
      domElement.addEventListener(propToEvent(prop), props[prop]);
    } else {
      domElement[prop] = props[prop];
    }
  }
  for (const child of children) {
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

createRoot(document.getElementById('root')).render(
  <h1 id="message" onClick={console.log}>
    Hello
  </h1>,
);
