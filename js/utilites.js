// get input value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = "";

    return inputValue;
};

// set input value to result field
function setInputValue(resultFieldId, result) {
    const resultField = document.getElementById(resultFieldId);
    // error handling
    if (isNaN(result)) {
        alert("please provide number");
        return;
    }
    resultField.innerText = result;
};