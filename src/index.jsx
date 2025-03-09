const createRoot = (domElement) => {
  return {
    render: (vdomNode) => {
      const textNode = document.createTextNode(vdomNode);
      domElement.appendChild(textNode);
    },
  };
};

createRoot(document.getElementById('root')).render('Hello');
