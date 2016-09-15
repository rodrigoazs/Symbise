var jsym = (function (undefined) {
    "use strict";

    function Expression(value) {
      this.value = automatic_simplify(parse(value));
    }

    Expression.prototype.copy = function() {
      return new Expression(this.toString());
    };

    Expression.prototype.toString = function() {
      return stringEquation(this.value);
    };

    Expression.prototype.toTex = function() {
      return toTex(this.value);
    };

    Expression.prototype.add = function(v) {
      this.value = automatic_simplify(construct(OP_ADD, this.value, parse(v)));
    };

    function Value(v) {
        if (typeof v === "undefined") return new Expression("0");
        return new Expression(v);
    }
