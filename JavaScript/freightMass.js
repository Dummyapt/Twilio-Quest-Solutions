function calculateMass(inputArray) {
    return inputArray.reduce((totLength, item) => totLength + item.length, 0);
}