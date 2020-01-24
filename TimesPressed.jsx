function myFunc() {
  var self = this;

  (function internal() {
    if (!self.timesPressed) {
      self.timesPressed = 1;
    } else {
      self.timesPressed++;
    }
  })();

  return this.timesPressed;
}

console.log(myFunc());
console.log(myFunc());
console.log(myFunc());
