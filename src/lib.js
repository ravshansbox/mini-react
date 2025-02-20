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

const render = (container, element) => {
  const domElement =
    element.type === 'TEXT_NODE'
      ? document.createTextNode('')
      : document.createElement(element.type);

  for (const [key, value] of Object.entries(element.props)) {
    if (!isDomProp(key)) continue;
    domElement[key] = value;
  }

  for (const child of element.props.children) {
    render(child, domElement);
  }

  container.appendChild(domElement);
};

export const createRoot = (container) => {
  return {
    render: render.bind(null, container),
  };
};
