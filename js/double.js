function double() {
    // get input value
    const inputValue = getInputValue("double-input-field");

    // make double
    const doubleValue = inputValue * 2;

    // set input value
    setInputValue("result-double", doubleValue);
};