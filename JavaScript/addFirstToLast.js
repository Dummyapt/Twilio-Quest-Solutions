function addFirstToLast(inputArray) {
    let firstAndLast = "";

    return inputArray.length > 0 ? firstAndLast = inputArray[0] + inputArray[inputArray.length - 1] : firstAndLast;
}