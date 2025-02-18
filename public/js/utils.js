// @license Apache-2.0
// @copyright Payal Yadav

// Add event on elements
const addEventOnElement = (elements, eventType, callback) => {
  elements.forEach((element) => {
    element.addEventListener(eventType, callback);
  });
};

export { addEventOnElement };
