const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = [];
var count = 0;

rl.on("line", function (x) {
  count += 1;

  input.push(x);
  
  if (count === 2) {
    rl.close();
  }
}).on("close", function () {
  input[0] = input[0].split(" ");
  input[0].sort(function(a, b) {
    return b - a;
  });
  console.log(input[0][input[1] - 1]);
  
  process.exit();
});