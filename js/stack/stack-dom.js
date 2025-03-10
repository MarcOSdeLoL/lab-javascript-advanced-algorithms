const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {
  // ... your code goes here
  const inputs = document.querySelectorAll('stack-input');
  inputs.forEach(element => {
    element.remove();
  });
};

const renderListStack = () => {
  const stack = newStack.display();
  stack.forEach(element => {
    const node = document.createElement("li")
    node.classList = "active stack-input"
    node.innerHTML = element
    stackList.appendChild(node)

  })
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToStack = () => {
  try {

    // ... your code goes here
    newStack.push(stackInput.value)
    clearStackInput();
    renderListStack()

  } catch (error) {
    // there was an overflow error, handle it
  }
};

const removeFromStack = () => {
  try {
    // ... your code goes here
  } catch (error) {
    // there was an underflow error, handle it
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
