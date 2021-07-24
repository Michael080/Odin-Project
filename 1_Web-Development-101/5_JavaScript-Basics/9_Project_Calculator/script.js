// @ts-check
// DOM Elems:

// https://www.neurogrowth.ca/magic-mushroom-chocolate-bar-recipe/

const buttons = document.querySelectorAll('.button'),
      display = document.querySelector('.display');
      
// other Vars:
// TODO --- MOVE - consolidate thisOp and createOperation 
const thisOp = {},
      session = {
        initial: true
      };
      
// TODO --- MOVE - Move method storeNum() into createOperation() 
function createOperation(num1, num2, op) {
  this.num1 = num1;
  this.num2 = num2;
  this.op = op
} 

const operation = new createOperation();

// Store button data
function Btn(keyType, text, data ) {
  this.keyType = keyType;
  this.text = text;
  this.data = data;
}

function storeNum(num1) {
  this.num1 = num1;
}

const keypad = {}; // Store ALL keys here

// display.textContent = btnData : display.textContent += btnData;
function updateDisplay(session, btnData) {
  session.initial === true ? display.textContent = btnData : display.textContent += btnData;
  session.initial = false;
}

// populate data-fields & add listener
buttons.forEach(btn => {
  const key = Object.keys(btn.dataset);
  const btnText = btn.textContent;
  let btnData = btn.dataset[key];

  btnText === '%' ? btnData = 'percent' : btnData = btnText;

  // Store buttons
  keypad[btnData] = new Btn(key[0], btnText, btnData);

  // Create prop. for storing number values
  if (keypad[btnData].keyType === 'number') {
    keypad[btnData].number = Number(btnData);
  }

  // TODO --- Declare function outside of event listener - if possible
  btn.addEventListener('click', () => {
    // TODO --- REMOVE? - I don't think this var is being used
    let mySession = session.initial;
    // ! --- Bug - 'padding div' disappears upon textContent update
    // TODO --- If FALSE - call func. updateDisplay()
    operate(keypad[btnData]);
  })
})

// TODO --- Pass keypad prop. instead of op and 'parse' op after the fact
// Math Functions
// TODO --- REFACTOR - Modularize via function declaration
function operate(keyInput, num1, num2) {
  function flatten(array) {
    return array.reduce((acc, val) => [...acc, val], []);
  }

  function add (...nums) {
    return nums.reduce((num1, num2) => num1 + num2)
  }
  
  function subtract (...nums) {
    return nums.reduce((num1, num2) => num1 - num2);
  }
  
  function sum (...nums) {
    nums.length > 0 ? nums = flatten(nums): nums = nums;
    const summer = (...nums) => nums.length > 0 ? add(...nums) : 0;
    return Number(summer(...nums));
  }
  
  function multiply (...nums) {
    const checkNested = val => val.some(elem => Array.isArray(elem));
    nums.length > 0 ? nums = flatten(nums): nums = nums;
    return nums.reduce((num1, num2) => num1 * num2);
  }

  function displayClear() {
    display.textContent = '0';
    return session.initial = true;
  }
  
  function displayDel() {
    const deleteChar = () => {
      let arrayified = Array.from(display.textContent);
      arrayified.pop()
      let stringified = arrayified.toString();

      for (let i = 0; i < stringified.length; i++) {
        stringified = stringified.replace(',', '');
      }
      
      display.textContent = stringified;
    }

    display.textContent.length > 1 ? deleteChar() : display.textContent = '0';
    session.initial = true;
  }

  // TODO --- FIX - Clear/delete no longer working 
  const operations = {    
    '+': add,
    '-': subtract,
    '+': sum,
    '*': multiply,
    clear: displayClear,
    delete: displayDel,
    default: () => 'ERROR'
  }

// TODO --- RENAME - this function should be called getDisplayText or something
  function getDisplayText() {
    return Number(display.textContent);
  }

  function testo(num) {
    this.numero = num;
  }

  let blammo = new testo();

  // TODO --- Remove? - Not in use. Check if needed
  // take user input
  function input(inPut) {
    return operations[inPut]();
  }

  // Display number and return
  // vars:
  //  session, 
  //  op, 
  //  number1
  // funcs:
  //  updateDisplay(), getDisplayText(), runOps
  if (keyInput.keyType === 'number') {
    return updateDisplay(session, keyInput.data);
  } else if (keyInput.keyType === 'operator') {

      if (keyInput.data !== '=') {
        // Store operator
        operation.op = keyInput.data;
        // ! TEMP CODE !!!
        session.initial === false ? operation.num1 = getDisplayText() : 'next';
        
        // RESET session.initial for updateDisplay()
        session.initial = true;
      } else {
        operation.num2 = getDisplayText();
        // TODO Passing global values to function seems redundant do what makes sense yo'
        runOps(operation.num1, operation.num2);
      }
  } else {
    operations[keyInput.data]();
  }

  // TODO --- MOVE? - runOps() may need to run in global-scope, or some of the logic:
  // vars:
  //  op, 
  //  operations,
  //  num1, num2
  function runOps(num1, num2) {
    try {
      // ! This note is for when math operation is called for DO NOT APPLY TO BELOW TERNARY!!!
       // ! ** should be: operations[operation.op](operation)
        // ! operation.op will return +, -, etc,. and operations keys are words so this needs to be fixed
      if (keyInput.data === 'clear' || keyInput.data === 'delete') {
        return operations[keyInput.data](num1, num2);
      } else {
        display.textContent = operations[operation.op](num1, num2)
      }

      let result = operations[keyInput](num1, num2);
      // vars:
        //  op, 
        //  operations,
        //  session,
        //  result
      // TODO --- REMOVE? - First two conditions I don't think are necessary
      if ((keyInput.keyType !== 'clear' && keyInput.keyType !== 'delete') && typeof(result) !== 'number') {
        throw error;
      } else {
        return result;
      }
    } catch (error) {
        // TODO --- REMOVE? - Return of session.initial may be unnecessary check if uses elsewhere
        return [operations.default(), session.initial];
    } 
  }
}

// display.textContent = '99999999999999999999';
// operate('clear');
