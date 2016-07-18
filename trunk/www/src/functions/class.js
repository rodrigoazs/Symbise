function jSym() {
}

jSym.prototype.run = function (expression) {
  this.expression = parse(expression);
  return this.expression;
}

jSym.prototype.simplify = function () {
  this.expression = automatic_simplify(this.expression);
  return this.expression;
}

jSym.prototype.toString = function () {
  return stringEquation(this.expression);
}
