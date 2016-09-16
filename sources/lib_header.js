var jsym = (function (undefined) {
    "use strict";

    function Expression(value) {
      if(typeof value === "string")
      {
        this.value = automatic_simplify(parse(value));
      }else{
        this.value = value;
      }

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
      return new Expression(automatic_simplify(construct(OP_ADD, this.value, parse(v))));
    };

    function Value(v) {
        if (typeof v === "undefined") return new Expression("0");
        return new Expression(v);
    }
