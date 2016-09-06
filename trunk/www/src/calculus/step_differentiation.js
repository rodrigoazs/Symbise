
// Step Diff (u)
// Given an expression BAE or ASAE returns a step-by-step
// using Tex format showing how to derivate the
// expression u.
function step_diff(node)
{
  var n = new step_diff_obj(node);
  while(1)
  {
    n.expression = n.step_diff_rec(n.expression);
    if(n.diff_found == false)
    {
      n.ret += "The result is:"
    }
    n.ret += "$$="+toTex(n.expression)+"$$";
    n.remove_box();
    n.expression = automatic_simplify(n.expression);
    if(n.diff_found == false){
      break;
    } else {
      n.diff_found = false;
    }
  }
  return n.ret;
}

// Step Diff Object
// Responsible for initiate the step-by-step machine
// by storing the expression and requesting its derivative
function step_diff_obj(node)
{
  this.expression = createNode(NODE_FUNC, FUNC_DIFF, automatic_simplify(node));
  this.ret = "Possible derivation:$$"+toTex(this.expression)+"$$";
  this.diff_found = false;
  this.box = 0;
};

// Step Diff Recursive
// Responsible for looking the expression tree
step_diff_obj.prototype.step_diff_rec = function (node)
{
  var ret = this.step_diff_check(node);
  if(this.diff_found)
  {
    return ret;
  }
  for(var i=0; i<ret.children.length; i++)
  {
    ret.children[i] = this.step_diff_rec(ret.children[i]);
  }
  return ret;
}

// Step Diff Remove Box
// Remove the box from the sub-expression
step_diff_obj.prototype.remove_box = function()
{
  if(this.box.type == "STEP_DIFF_BOX" && this.box.children.length == 1)
  {
    this.box.type = this.box.children[0].type;
    this.box.value = this.box.children[0].value;
    this.box.children = this.box.children[0].children;
  }
  // var ret = node;
  // if(node.type == "STEP_DIFF_BOX")
  // {
  //   ret = ret.children[0];
  // }
  // else
  // {
  //   for(var i=0; i<node.children.length; i++)
  //   {
  //     ret.children[i] = this.remove_color_rec(ret.children[i]);
  //   }
  // }
  // return ret;
}

// Step Diff Check
// Check if the expression is a diff or not, attaches a box if it is
step_diff_obj.prototype.step_diff_check = function (node)
{
  var ret = node;
  if(this.diff_found == true)
  {
    return ret;
  }
  if(kind(node) == FUNC_DIFF)
  {
    this.diff_found = true;
    //ret = this.step_diff_execute(node.children[0]);
    ret = createNode("STEP_DIFF_BOX", 0, this.step_diff_execute(node.children[0]));
    this.box = ret;
  }
  return ret;
}

// Step-by-step Diff Execution (u)
// Only an ASAE as input node is acceptable
step_diff_obj.prototype.step_diff_execute = function(node)
{
  var ret = 0;
  // if constant
  if(free_of_symbol(node, "x"))
  {
    this.ret += "The derivative of a constant is zero:";
    ret = createNode(NODE_INT, 0);
    return ret;
  }

  switch(node.type)
  {
    case NODE_OP:
      switch(node.value)
      {
        case OP_ADD:
          this.ret += "Differentiate the sum term by term:";
          var children = new Array();
          for(var i = 0; i < node.children.length; i++)
          {
            children[i] = createNode(NODE_FUNC, FUNC_DIFF, node.children[i]);
          }
          ret = construct(OP_ADD, children);
          break;
        // Difference does not exist in an ASAE
        // case OP_SUB:
        //   break;
        // Quotient does not exist in an ASAE
        // case OP_DIV:
        //   break;
        case OP_MUL:
          var fac = factor_out(node, "x");
          // only constants is already checked in the beggining of the algorithm
          if(fac[0] === undefined && fac[1] !== undefined) //only variables
          {
            // check if its actually a quotient
            var quo = form_quotient(node);
            if(kind(quo[1]) == NODE_INT && quo[1].value == 1) // if denominator is 1 there is no negative power
            {
              var u = fac[1].children[0];
              if(fac[1].children.length == 2)
              {
                var v = fac[1].children[1];
              }
              else
              {
                var v = construct(OP_MUL, fac[1].children.slice(1));
              }
              this.ret += "Use the product rule, $d/{dx}(u v)=v {du}/{dx}+u {dv}/{dx}$, where $u="+toTex(u)+"$ and $v="+toTex(v)+"$";
              ret = construct(OP_ADD, construct(OP_MUL, v, createNode(NODE_FUNC, FUNC_DIFF, u)), construct(OP_MUL, u, createNode(NODE_FUNC, FUNC_DIFF, v)));
            }
            else
            {
              var u = quo[0];
              var v = quo[1];
              this.ret += "Use the quotient rule, $d/{dx}(u/v)={v {du}/{dx}-u {dv}/{dx}}/{v^{2}}$, where $u="+toTex(u)+"$ and $v="+toTex(v)+"$";
              ret = construct(OP_MUL, construct(OP_ADD, construct(OP_MUL, v, createNode(NODE_FUNC, FUNC_DIFF, u)), construct(OP_MUL, createNode(NODE_INT, -1), construct(OP_MUL, u, createNode(NODE_FUNC, FUNC_DIFF, v)))), construct(OP_POW, v, createNode(NODE_INT, -2)));
            }
          }
          else
          {
            this.ret += "Factor out constants:";
            ret = construct(OP_MUL, fac[0], createNode(NODE_FUNC, FUNC_DIFF, fac[1]));
          }
          break;
        // Negation does not exist in an ASAE
        // case OP_NEG:
        //   break;
        case OP_POW:
          // only constants is already checked in the beggining of the algorithm
          // power x^(constant)
          if(is_symbol(node.children[0], "x") && free_of_symbol(node.children[1], "x"))
          {
            this.ret += "Use the power rule, $d/{dx}(x^{n})=n x^{n-1}$, where $n="+toTex(node.children[1])+"$";
            ret = construct(OP_MUL, node.children[1], automatic_simplify(construct(OP_POW, node.children[0], construct(OP_ADD, node.children[1], createNode(NODE_INT, -1)))));
          }
          // power (variable)^(constant)
          else if(!free_of_symbol(node.children[0], "x") && free_of_symbol(node.children[1], "x"))
          {
            var dev = automatic_simplify(construct(OP_MUL, node.children[1], construct(OP_POW, createNode(NODE_SYM, "u"), construct(OP_ADD, node.children[1], createNode(NODE_INT, -1)))));
            this.ret += "Use the chain rule, $d/{dx}("+toTex(node)+")=d/{du}(u^{"+toTex(node.children[1])+"}) d/{dx}("+toTex(node.children[0])+")$, where $u="+toTex(node.children[0])+"$ and $d/{du}(u^{"+toTex(node.children[1])+"})="+toTex(dev)+"$:";
            ret = construct(OP_MUL, [node.children[1], automatic_simplify(construct(OP_POW, node.children[0], construct(OP_ADD, node.children[1], createNode(NODE_INT, -1)))), createNode(NODE_FUNC, FUNC_DIFF, node.children[0])]);
          }
          // power (e)^(x)
          else if(is_symbol(node.children[0], "e") && is_symbol(node.children[1], "x"))
          {
            this.ret = "The derivative of $e^x$ is $e^x$:";
            ret = node;
          }
          else if(is_symbol(node.children[0], "e") && !free_of_symbol(node.children[1], "x"))
          {
            this.ret += "Use the chain rule, $d/{dx}("+toTex(node)+")=d/{du}(e^{u}) d/{dx}("+toTex(node.children[1])+")$, where $u="+toTex(node.children[1])+"$ and $d/{du}(e^{u})=e^{u}$:";
            ret = construct(OP_MUL, node, createNode(NODE_FUNC, FUNC_DIFF, node.children[1]));
          }
          // power (constant)^(x)
          // else if(free_of_symbol(node.children[0], "x") && is_symbol(node.children[1], "x"))
          // {
          //   var exp = construct(OP_MUL, createNode(NODE_SYM, "x"), createNode(NODE_FUNC, FUNC_NLOG, node.children[0]));
          //   var rew = construct(OP_POW, createNode(NODE_SYM, "e"), exp);
          //   this.ret += "Rewriting $"+toTex(node)+"="+toTex(rew)+"$ and using the chain rule, $d/{dx}("+toTex(rew)+")=d/{du}(e^u) d/{dx}("+toTex(exp)+")$, where $u="+toTex(exp)+"$ and $d/{du}(e^u)=e^u$:";
          //   ret = automatic_simplify(construct(OP_MUL, construct(OP_POW, node.children[0], node.children[1]), createNode(NODE_FUNC, FUNC_NLOG, node.children[0])));
          // }
          // power (variable)^(variable)
          else
          {
            var exp = construct(OP_MUL, node.children[1], createNode(NODE_FUNC, FUNC_NLOG, node.children[0]));
            var rew = construct(OP_POW, createNode(NODE_SYM, "e"), exp);
            this.ret += "Rewriting $"+toTex(node)+"$ as $"+toTex(rew)+"$ and using the chain rule, $d/{dx}("+toTex(rew)+")=d/{du}(e^u) d/{dx}("+toTex(exp)+")$, where $u="+toTex(exp)+"$ and $d/{du}(e^u)=e^u$:";
            //ret = automatic_simplify(construct(OP_ADD, construct(OP_MUL, construct(OP_MUL, node.children[1], construct(OP_POW, node.children[0], construct(OP_SUB, node.children[1], createNode(NODE_INT, 1)))), symbolic_diff(node.children[0])), construct(OP_MUL, construct(OP_MUL, construct(OP_POW, node.children[0], node.children[1]), createNode(NODE_FUNC, FUNC_NLOG, node.children[0])), symbolic_diff(node.children[1]))));
            ret = construct(OP_MUL, node, createNode(NODE_FUNC, FUNC_DIFF, exp));
            // only rewriting
            //this.ret += "Rewriting $"+toTex(node)+"$ as $"+toTex(rew)+"$:";
            //ret = createNode(NODE_FUNC, FUNC_DIFF, rew);
          }
          break;
      }
      break;

    case NODE_FUNC:
      switch(node.value)
      {
        case FUNC_SIN:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of sin, $d/{dx}(sin(x))=cos(x)$";
            ret = createNode(NODE_FUNC, FUNC_COS, node.children[0]);
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(sin(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(sin(u))=cos(u)$:";
            ret = construct(OP_MUL, createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), createNode(NODE_FUNC, FUNC_COS, node.children[0]));
          }
          break;
        case FUNC_COS:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of cos, $d/{dx}(cos(x))=-sin(x)$";
            ret = construct(OP_MUL, createNode(NODE_INT, -1), createNode(NODE_FUNC, FUNC_SIN, node.children[0]));
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(cos(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(cos(u))=-sin(u)$:";
            ret = construct(OP_MUL, [createNode(NODE_INT, -1), createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), createNode(NODE_FUNC, FUNC_SIN, node.children[0])]);
          }
          break;
        case FUNC_ASINH:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of asinh, $d/{dx}(asinh(x))=1/{√{1+x^2}}$";
            ret = construct(OP_POW, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))), createNode(NODE_INT, -1));
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(asinh(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(asinh(u))=1/{√{1+x^2}}$:";
            ret = construct(OP_MUL, createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))), createNode(NODE_INT, -1)));
          }
          break;
        case FUNC_SINH:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of sinh, $d/{dx}(sinh(x))=cosh(x)$";
            ret = createNode(NODE_FUNC, FUNC_COSH, node.children[0]);
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(sinh(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(sinh(u))=cosh(u)$:";
            ret = construct(OP_MUL, createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), createNode(NODE_FUNC, FUNC_COSH, node.children[0]));
          }
          break;
        case FUNC_ASIN:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of asin, $d/{dx}(asin(x))={1}/{√{1-x^2}}$";
            ret = construct(OP_POW, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))), createNode(NODE_INT, -1));
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(asin(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(asin(u))={1}/{√{1-u^2}}$:";
            ret = construct(OP_MUL, createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))), createNode(NODE_INT, -1)));
          }
          break;
        case FUNC_ACOSH:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of acosh, $d/{dx}(acosh(x))={1}/{√{1-x}√{1+x}}$";
            ret = construct(OP_MUL, construct(OP_POW, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD, node.children[0], createNode(NODE_INT, -1))), createNode(NODE_INT, -1)), construct(OP_POW, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD, node.children[0], createNode(NODE_INT, 1))), createNode(NODE_INT, -1)));
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(asin(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(asin(u))={1}/{√{1-u^2}}$:";
            ret = construct(OP_MUL, [createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD, node.children[0], createNode(NODE_INT, -1))), createNode(NODE_INT, -1)), construct(OP_POW, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD, node.children[0], createNode(NODE_INT, 1))), createNode(NODE_INT, -1))]);
          }
          break;
        case FUNC_COSH:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of cosh, $d/{dx}(cosh(x))=sinh(x)$";
            ret = createNode(NODE_FUNC, FUNC_SINH, node.children[0]);
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(cosh(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(cosh(u))=sinh(u)$:";
            ret = construct(OP_MUL, createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), createNode(NODE_FUNC, FUNC_SINH, node.children[0]));
          }
          break;
        case FUNC_ACOS:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of acos, $d/{dx}(acos(x))=-{1}/{1-x^2}$";
            ret = construct(OP_MUL, createNode(NODE_INT, -1), construct(OP_POW, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD, createNode(NODE_INT, -1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))), createNode(NODE_INT, -1)));
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(acos(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(acos(u))=-{1}/{1-u^2}$:";
            ret = construct(OP_MUL, [createNode(NODE_INT, -1), createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD, createNode(NODE_INT, -1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))), createNode(NODE_INT, -1))]);
          }
          break;
        case FUNC_ATANH:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of atanh, $d/{dx}(atanh(x))={1}/{1-x^2}$";
            ret = construct(OP_POW, construct(OP_ADD, createNode(NODE_INT, 1), construct(OP_MUL, createNode(NODE_INT, -1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))), createNode(NODE_INT, -1));
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(atanh(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(atanh(u))={1}/{1-u^2}$:";
            ret = construct(OP_MUL, createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), construct(OP_POW, construct(OP_ADD, createNode(NODE_INT, 1), construct(OP_MUL, createNode(NODE_INT, -1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))), createNode(NODE_INT, -1)));
          }
          break;
        case FUNC_TANH:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of tanh, $d/{dx}(tanh(x))=sech^2(x)$";
            ret = construct(OP_POW, createNode(NODE_FUNC, FUNC_SECH, node.children[0]), createNode(NODE_INT, 2));
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(tanh(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(atanh(u))=sech^2(u)$:";
            ret = construct(OP_MUL, createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_SECH, node.children[0]), createNode(NODE_INT, 2)));
          }
          break;
        case FUNC_ATAN:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of atan, $d/{dx}(atan(x))=1/{1+x^2}$";
            ret = construct(OP_POW, construct(OP_ADD, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))), createNode(NODE_INT, -1));
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(atan(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(atan(u))=1/{1+u^2}$:";
            ret = construct(OP_MUL, createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), construct(OP_POW, construct(OP_ADD, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))), createNode(NODE_INT, -1)));
          }
          break;
        case FUNC_TAN:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of tan, $d/{dx}(tanh(x))=sec^2(x)$";
            ret = construct(OP_POW, createNode(NODE_FUNC, FUNC_SEC, node.children[0]), createNode(NODE_INT, 2));
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(tan(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(tan(u))=sec^2(u)$:";
            ret = construct(OP_MUL, createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_SEC, node.children[0]), createNode(NODE_INT, 2)));
          }
          break;
        case FUNC_ASECH:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of asech, $d/{dx}(asech(x))=-1/{x √{{1-x}/{1+x}} (1+x)}$";
            ret = construct(OP_MUL, [createNode(NODE_INT, -1), construct(OP_POW, node.children[0], createNode(NODE_INT, -1)), construct(OP_POW, construct(OP_ADD, createNode(NODE_INT, 1), node.children[0]), createNode(NODE_INT, -1)), construct(OP_POW, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_MUL, construct(OP_ADD, createNode(NODE_INT, 1), construct(OP_MUL, createNode(NODE_INT, -1), node.children[0])), construct(OP_POW, construct(OP_ADD, createNode(NODE_INT, 1), node.children[0]), createNode(NODE_INT, -1)))), createNode(NODE_INT, -1))]);
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(asech(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(asech(u))=-1/{u √{{1-u}/{1+u}} (1+u)}$:";
            ret = construct(OP_MUL, [createNode(NODE_INT, -1), createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), construct(OP_POW, node.children[0], createNode(NODE_INT, -1)), construct(OP_POW, construct(OP_ADD, createNode(NODE_INT, 1), node.children[0]), createNode(NODE_INT, -1)), construct(OP_POW, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_MUL, construct(OP_ADD, createNode(NODE_INT, 1), construct(OP_MUL, createNode(NODE_INT, -1), node.children[0])), construct(OP_POW, construct(OP_ADD, createNode(NODE_INT, 1), node.children[0]), createNode(NODE_INT, -1)))), createNode(NODE_INT, -1))]);
          }
          break;
        case FUNC_SECH:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of sech, $d/{dx}(sech(x))=-tanh(x)sech(x)$";
            ret = construct(OP_MUL, [createNode(NODE_INT, -1), createNode(NODE_FUNC, FUNC_TANH, node.children[0]), createNode(NODE_FUNC, FUNC_SECH, node.children[0])]);
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(sech(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(sech(u))=-tanh(u)sech(u)$:";
            ret = construct(OP_MUL, [createNode(NODE_INT, -1), createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), createNode(NODE_FUNC, FUNC_TANH, node.children[0]), createNode(NODE_FUNC, FUNC_SECH, node.children[0])]);
          }
          break;
        case FUNC_ASEC:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of asec, $d/{dx}(asec(x))=1/{√{1-1/{x^2}} x^2}$";
            ret = construct(OP_MUL, [construct(OP_POW, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD, createNode(NODE_INT, 1), construct(OP_MUL, createNode(NODE_INT, -1), construct(OP_POW, node.children[0], createNode(NODE_INT, -2))))), createNode(NODE_INT, -1)), construct(OP_POW, node.children[0], createNode(NODE_INT, -2))]);
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(asec(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(asec(u))=1/{√{1-1/{u^2}} u^2}$:";
            ret = construct(OP_MUL, [createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD, createNode(NODE_INT, 1), construct(OP_MUL, createNode(NODE_INT, -1), construct(OP_POW, node.children[0], createNode(NODE_INT, -2))))), createNode(NODE_INT, -1)), construct(OP_POW, node.children[0], createNode(NODE_INT, -2))]);
          }
          break;
        case FUNC_SEC:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of sec, $d/{dx}(sech(x))=tan(x)sec(x)$";
            ret = construct(OP_MUL, createNode(NODE_FUNC, FUNC_TAN, node.children[0]), createNode(NODE_FUNC, FUNC_SEC, node.children[0]));
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(sec(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(sec(u))=tan(u)sec(u)$:";
            ret = construct(OP_MUL, [createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), createNode(NODE_FUNC, FUNC_TAN, node.children[0]), createNode(NODE_FUNC, FUNC_SEC, node.children[0])]);
          }
          break;
        case FUNC_ACSCH:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of acsch, $d/{dx}(acsch(x))=-1/{√{1+1/{x^2}} x^2}$";
            ret = construct(OP_MUL, [createNode(NODE_INT, -1), construct(OP_POW, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, -2)))), createNode(NODE_INT, -1)), construct(OP_POW, node.children[0], createNode(NODE_INT, -2))]);
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(acsch(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(acsch(u))=1/{√{1+1/{u^2}} u^2}$:";
            ret = construct(OP_MUL, [createNode(NODE_INT, -1), createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, -2)))), createNode(NODE_INT, -1)), construct(OP_POW, node.children[0], createNode(NODE_INT, -2))]);
          }
          break;
        case FUNC_CSCH:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of csch, $d/{dx}(csch(x))=-csch(x)coth(x)$";
            ret = construct(OP_MUL, [createNode(NODE_INT, -1), createNode(NODE_FUNC, FUNC_CSCH, node.children[0]), createNode(NODE_FUNC, FUNC_COTH, node.children[0])]);
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(csch(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(csch(u))=-csch(u)coth(u)$:";
            ret = construct(OP_MUL, [createNode(NODE_INT, -1), createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), createNode(NODE_FUNC, FUNC_CSCH, node.children[0]), createNode(NODE_FUNC, FUNC_COTH, node.children[0])]);
          }
          break;
		    case FUNC_ACSC:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of acsc, $d/{dx}(acsc(x))=-1/{√{1-1/{x^2}} x^2}$";
            ret = construct(OP_MUL, [createNode(NODE_INT, -1), construct(OP_POW, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD, createNode(NODE_INT, 1), construct(OP_MUL, createNode(NODE_INT, -1), construct(OP_POW, node.children[0], createNode(NODE_INT, -2))))), createNode(NODE_INT, -1)), construct(OP_POW, node.children[0], createNode(NODE_INT, -2))]);
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(acsc(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(acsc(u))=-1/{√{1-1/{u^2}} u^2}$:";
            ret = construct(OP_MUL, [createNode(NODE_INT, -1), createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD, createNode(NODE_INT, 1), construct(OP_MUL, createNode(NODE_INT, -1), construct(OP_POW, node.children[0], createNode(NODE_INT, -2))))), createNode(NODE_INT, -1)), construct(OP_POW, node.children[0], createNode(NODE_INT, -2))]);
          }
          break;
        case FUNC_CSC:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of csc, $d/{dx}(csc(x))=-csc(x)cot(x)$";
            ret = construct(OP_MUL, [createNode(NODE_INT, -1), createNode(NODE_FUNC, FUNC_CSC, node.children[0]), createNode(NODE_FUNC, FUNC_COT, node.children[0])]);
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(csc(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(csc(u))=-csc(u)cot(u)$:";
            ret = construct(OP_MUL, [createNode(NODE_INT, -1), createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), createNode(NODE_FUNC, FUNC_CSC, node.children[0]), createNode(NODE_FUNC, FUNC_COT, node.children[0])]);
          }
          break;
        case FUNC_ACOTH:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of acoth, $d/{dx}(acoth(x))=1/{1-x^2}$";
            ret = construct(OP_POW, construct(OP_ADD, createNode(NODE_INT, 1), construct(OP_MUL, createNode(NODE_INT, -1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))), createNode(NODE_INT, -1));
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(acoth(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(acoth(u))=1/{1-u^2}$:";
            ret = construct(OP_MUL, createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), construct(OP_POW, construct(OP_ADD, createNode(NODE_INT, 1), construct(OP_MUL, createNode(NODE_INT, -1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))), createNode(NODE_INT, -1)));
          }
          break;
        case FUNC_COTH:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of coth, $d/{dx}(coth(x))=-csch^{2}(x)$";
            ret = construct(OP_MUL, createNode(NODE_INT, -1), construct(OP_POW, createNode(NODE_FUNC, FUNC_CSCH, node.children[0]), createNode(NODE_INT, 2)));
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(coth(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(coth(u))=-csch^{2}(x)$:";
            ret = construct(OP_MUL, [createNode(NODE_INT, -1), createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_CSCH, node.children[0]), createNode(NODE_INT, 2))]);
          }
          break;
        case FUNC_ACOT:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of acot, $d/{dx}(acoth(x))=-1/{1+x^2}$";
            ret = construct(OP_MUL, createNode(NODE_INT, -1), construct(OP_POW, construct(OP_ADD, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))), createNode(NODE_INT, -1)));
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(acot(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(acot(u))=-1/{1+u^2}$:";
            ret = construct(OP_MUL, [createNode(NODE_INT, -1), createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), construct(OP_POW, construct(OP_ADD, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))), createNode(NODE_INT, -1))]);
          }
          break;
        case FUNC_COT:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of cot, $d/{dx}(coth(x))=-csc^{2}(x)$";
            ret = construct(OP_MUL, createNode(NODE_INT, -1), construct(OP_POW, createNode(NODE_FUNC, FUNC_CSC, node.children[0]), createNode(NODE_INT, 2)));
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(cot(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(cot(u))=-csc^{2}(x)$:";
            ret = construct(OP_MUL, [createNode(NODE_INT, -1), createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_CSC, node.children[0]), createNode(NODE_INT, 2))]);
          }
          break;
        case FUNC_SQRT:
          var rew = construct(OP_POW, node.children[0], construct(OP_DIV, createNode(NODE_INT, 1), createNode(NODE_INT, 2)));
          this.ret += "Rewriting $"+toTex(node)+"$ as $"+toTex(rew)+"$:";
          ret = createNode(NODE_FUNC, FUNC_DIFF, rew);
          //ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_MUL,createNode(NODE_INT, 2), createNode(NODE_FUNC, FUNC_SQRT, node.children[0])));
          break;
        // case FUNC_EXP:
        //   ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_EXP, node.children[0]));
        //   break;
        case FUNC_NLOG:
          if(is_symbol(node.children[0], "x"))
          {
            this.ret += "Use the derivative of log(x), $d/{dx}(log(x))={1}/{x}$:";
            ret = construct(OP_POW, node.children[0], createNode(NODE_INT, -1));
          }
          else
          {
            this.ret += "Using the chain rule, $d/{dx}("+toTex(node)+")=d/{dx}("+toTex(node.children[0])+")d/{du}(log(u))$, where $u="+toTex(node.children[0])+"$ and $d/{du}(log(u))={1}/{u}$:";
            ret = construct(OP_MUL, createNode(NODE_FUNC, FUNC_DIFF, node.children[0]), construct(OP_POW, node.children[0], createNode(NODE_INT, -1)));
          }
          break;
        case FUNC_BLOG:
          var rew = construct(OP_MUL, createNode(NODE_FUNC, FUNC_NLOG, node.children[1]), construct(OP_POW, createNode(NODE_FUNC, FUNC_NLOG, node.children[0]), createNode(NODE_INT, -1)));
          // var cons = construct(OP_DIV, createNode(NODE_INT, 1), createNode(NODE_FUNC, FUNC_NLOG, node.children[0]));
          // if(is_symbol(node.children[1], "x"))
          // {
          //   this.ret += "Rewriting $"+toTex(node)+"="+toTex(rew)+"$, factoring out constants and using the derivative of log(x), $d/{dx}(log(x))={1}/{x}$:";
          //   ret = construct(OP_MUL, construct(OP_POW, node.children[1], createNode(NODE_INT, -1)), construct(OP_POW, createNode(NODE_FUNC, FUNC_NLOG, node.children[0]), createNode(NODE_INT, -1)));
          // }
          // else
          // {
          //   var den = createNode(NODE_FUNC, FUNC_NLOG, node.children[1]);
          //   this.ret += "Rewriting $"+toTex(node)+"="+toTex(rew)+"$, factoring out constants and using the chain rule, $"+toTex(cons)+" d/{dx}("+toTex(den)+")=d/{du}(e^u) d/{dx}("+toTex(den)+")$, where $u="+toTex(den)+"$ and $d/{du}(e^u)=e^u$:";
          //   ret = construct(OP_MUL, [createNode() ,construct(OP_POW, node.children[1], createNode(NODE_INT, -1)), construct(OP_POW, createNode(NODE_FUNC, FUNC_NLOG, node.children[0]), createNode(NODE_INT, -1))]);
          // }
          //ret = construct(OP_DIV, symbolic_diff(node.children[1]), construct(OP_MUL,node.children[1], createNode(NODE_FUNC, FUNC_NLOG, node.children[0])));
          this.ret += "Rewriting $"+toTex(node)+"$ as $"+toTex(rew)+"$:";
          ret = createNode(NODE_FUNC, FUNC_DIFF, rew);
          break;
      }
      break;

    case NODE_SYM:
      if(node.value == "x")
      {
        this.ret += "The derivative of a $x$ is $1$:";
        ret = createNode(NODE_INT, 1);
      }
      // else
      // {
      //   this.ret += "The derivative of a constant is zero:";
      //   ret = createNode(NODE_INT, 0);
      // }
      break;

    // case NODE_INT:
    //   this.ret += "The derivative of a constant is zero:";
    //   ret = createNode(NODE_INT, 0);
    //   break;
  }
  return ret;
}
