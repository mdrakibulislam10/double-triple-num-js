function triple() {
    // get input value
    const inputValue = getInputValue("triple-input-field");

    // make triple
    const tripleValue = inputValue * 3;

    // set input value
    setInputValue("result-triple", tripleValue);
};