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
