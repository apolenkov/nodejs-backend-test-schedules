console.log(args(1));

function args(x, f = () => x) {
  var x;
  var y = x;

  x = 2;

  return [x, y, f()];
}
