function calculatePower(numberArray) {
    let altArray = numberArray.map(value => value * 2);
    return altArray.reduce((sum, value) => sum + value, 0);
}