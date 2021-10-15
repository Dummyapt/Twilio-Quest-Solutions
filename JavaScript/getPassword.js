const password = [
    ['Q', 'W', 'E', 'R', 'T', 'Y'],
    ['A', 'S', 'D', 'F', 'G', 'H'],
    ['Z', 'X', 'C', 'V', 'B', 'N'],
    ['U', 'I', 'O', 'P', '!', '@'],
    ['H', 'J', 'K', 'L', '#', '$'],
    ['M', '%', '^', '&', '*', '?']
];

console.log(
    password[1][3] +
    password[3][4] +
    password[2][5] +
    password[3][4] +
    password[0][4] +
    password[0][2]
);