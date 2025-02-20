export const createElement = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextNode(child),
      ),
    },
  };
};

export const createTextNode = (nodeValue) => {
  return { type: 'TEXT_NODE', props: { nodeValue, children: [] } };
};

const isDomProp = (key) => key !== 'children';

const EVENT_REGEXP = /^on([A-Z]+)$/;
const isEventProp = (key) => EVENT_REGEXP.test(key);
const getEventName = (key) => EVENT_REGEXP.exec(key)?.[1].toLowerCase();

const render = (element, container) => {
  const domElement =
    element.type === 'TEXT_NODE'
      ? document.createTextNode('')
      : document.createElement(element.type);

  for (const [key, value] of Object.entries(element.props)) {
    if (isEventProp(key)) {
      domElement.addEventListener(getEventName(key), value);
    } else if (isDomProp(key)) {
      domElement[key] = value;
    }
  }

  for (const child of element.props.children) {
    render(child, domElement);
  }

  container.appendChild(domElement);
};

export const createRoot = (container) => {
  return { render: (element) => render(element, container) };
};
