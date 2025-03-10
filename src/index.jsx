function createElement(type, props, ...children) {
  return { type, props: { ...props, children } };
}

function isTextNode(vdomNode) {
  return ['string', 'number', 'boolean'].includes(typeof vdomNode);
}

function render(domElement, vdomNode) {
  let domNode;
  if (isTextNode(vdomNode)) {
    domNode = document.createTextNode(data);
  } else {
    domNode = document.createElement(vdomNode.type);
    for (const child of vdomNode.props.children) {
      render(domNode, child);
    }
    return domNode;
  }
  domElement.appendChild(domNode);
}

function createRoot(domElement) {
  return {
    render(vdomNode) {
      render(domElement, vdomNode);
    },
  };
}
