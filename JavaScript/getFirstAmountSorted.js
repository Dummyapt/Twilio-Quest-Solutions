function getFirstAmountSorted(inputArray, numberOfItems) {
    let newArray = inputArray.sort();
    newArray.slice(numberOfItems);
    return newArray;
}