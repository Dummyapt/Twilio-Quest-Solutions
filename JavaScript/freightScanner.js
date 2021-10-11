function scan(inputArray) {
    let counter = 0;

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === "contraband") {
            counter++;
        }
    }

    return counter;
}