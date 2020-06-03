// Default Parameters:

function showMessage(from, text="no text given") {
    alert( from + ": " + text);
}

// Pass showMessage() ONLY one parameter:
showMessage("Ann") // Ann: no text given
// Since only one param is passed in the default param value is used

// -------------------------------------------------------------------------

// More complex expressions can be used as default params such as functions:
function showMessages(from, text = anotherFunction()) {
    alert( from + ": " + text)
}

function anotherFunction() {
    return 'No second param foo'
}

showMessages('Wambo')
