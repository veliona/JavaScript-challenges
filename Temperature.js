function temp {
const n = parseInt(readline());
var inputs = readline().split(" ");
var numTemp = [];
var curr = inputs[0];
var diff = Math.abs(0 - curr);

if (n === 0 || inputs === undefined) {
  print("0");
} else {
  for (var val = 0; val < inputs.length; val++) {
    numTemp.push(Number(inputs[val]));
    var newdiff = Math.abs(0 - inputs[val]);
    if (newdiff < diff) {
      diff = newdiff;
      curr = inputs[val];
    } else if (newdiff == diff && curr < 0) {
      curr = inputs[val];
    }
  }
  print(curr);
}
}
