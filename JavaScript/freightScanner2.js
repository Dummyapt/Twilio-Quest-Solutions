function scan(inputArray) {
    let counter = [];

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === "contraband") {
            counter.push(i);
        }
    }

    return counter;
}