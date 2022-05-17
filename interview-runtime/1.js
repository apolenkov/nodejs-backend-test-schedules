var a = 5;

b();

console.log(a);

function b() {
  a = 15;

  if (a < 10) {
    var a = 3;
  }
}
