const numberInput = Number(process.argv[2]);
var a = 3;
var b = 5;

for (var i = 0; i <= numberInput; i++) {
    var output = "";
    if (i % a != 0 || i % b != 0)
        output = i;
    if (i % a == 0)
        output = "Java";
    if (i % b == 0)
        output = "Script";
    if (i % a == 0 && i % b == 0)
        output = "JavaScript";
}

console.log(output);