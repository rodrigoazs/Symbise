// Symbolic Diff (u)
// Given an expression BAE or ASAE returns the derivative
// The output is an expression not simplified
function symbolic_diff(node)
{
  var ret = 0;

  if(!node)
    return 0;

  switch(node.type)
  {
    case NODE_OP:
      switch(node.value)
      {
        case OP_ADD:
          var children = new Array();
          for(var i = 0; i < node.children.length; i++)
          {
            children[i] = symbolic_diff(node.children[i]);
          }
          ret = construct(OP_ADD, children);
          //ret = construct(OP_ADD, symbolic_diff(node.children[0]), symbolic_diff(node.children[1]));
          break;
        case OP_SUB:
          ret = construct(OP_SUB, symbolic_diff(node.children[0]), symbolic_diff(node.children[1]));
          break;
        case OP_DIV:
          if(is_fraction(node))
          {
            ret = createNode(NODE_INT, 0);
          }
          else
          {
            ret = construct(OP_DIV, construct(OP_SUB, construct(OP_MUL, symbolic_diff(node.children[0]), node.children[1]), construct(OP_MUL, symbolic_diff(node.children[1]), node.children[0])), construct(OP_POW, node.children[1], createNode(NODE_INT, 2)));
          }
          break;
        case OP_MUL:
          if(node.children.length == 2)
          {
            ret = construct(OP_ADD, construct(OP_MUL, symbolic_diff(node.children[0]), node.children[1]), construct(OP_MUL, node.children[0], symbolic_diff(node.children[1])));
          }
          else
          {
            var children = node.children.slice(1);
            ret = construct(OP_ADD, construct(OP_MUL, symbolic_diff(node.children[0]), construct(OP_MUL, children)), construct(OP_MUL, node.children[0], symbolic_diff(construct(OP_MUL, children))));
          }
          //ret = construct(OP_ADD, construct(OP_MUL, symbolic_diff(node.children[0]), node.children[1]), construct(OP_MUL, symbolic_diff(node.children[1]), node.children[0]));
          break;
        case OP_NEG:
          ret = construct(OP_NEG, symbolic_diff(node.children[0]));
          break;
        case OP_POW:
          ret = construct(OP_ADD, construct(OP_MUL, construct(OP_MUL, node.children[1], construct(OP_POW, node.children[0], construct(OP_SUB, node.children[1], createNode(NODE_INT, 1)))), symbolic_diff(node.children[0])), construct(OP_MUL, construct(OP_MUL, construct(OP_POW, node.children[0], node.children[1]), createNode(NODE_FUNC, FUNC_NLOG, node.children[0])), symbolic_diff(node.children[1])));
          break;
      }
      break;

    case NODE_FUNC:
      switch(node.value)
      {
        case FUNC_SIN:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_COS, node.children[0]));
          break;
        case FUNC_COS:
          ret = construct(OP_NEG, construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SIN, node.children[0])));
          break;
        case FUNC_ASINH:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))));
          break;
        case FUNC_SINH:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_COSH, node.children[0]));
          break;
        case FUNC_ASIN:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))));
          break;
        case FUNC_ACOSH:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, construct(OP_POW, node.children[0], createNode(NODE_INT, 2)), createNode(NODE_INT, 1))));
          break;
        case FUNC_COSH:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SINH, node.children[0]));
          break;
        case FUNC_ACOS:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, 1, construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))));
          break;
        case FUNC_ATANH:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_SUB, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_TANH:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_SECH, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_ATAN:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_TAN:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_SEC, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_ASECH:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL,construct(OP_MUL,node.children[0], creteNode(NODE_FUNC, FUNC_SQRT, construct(OP_DIV, construct(OP_SUB, createNode(NODE_INT, 1), node.children[0]), construct(OP_ADD,1, node.children[0])))), construct(OP_ADD,1, node.children[0])));
          break;
        case FUNC_SECH:
          ret = construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL,createNode(NODE_FUNC, FUNC_SECH, node.children[0]), createNode(NODE_FUNC, FUNC_TANH, node.children[0])));
          break;
        case FUNC_ASEC:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_MUL,node.children[0], createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, construct(OP_POW, node.children[0], createNode(NODE_INT, 2)), createNode(NODE_INT, 1)))));
          break;
        case FUNC_SEC:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), construct(OP_MUL,createNode(NODE_FUNC, FUNC_TAN, node.children[0]), createNode(NODE_FUNC, FUNC_SEC, node.children[0])));
          break;
        case FUNC_ACSCH:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL,createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_DIV, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))))), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_CSCH:
          ret = construct(OP_MUL,construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), createNode(NODE_FUNC, FUNC_COTH, node.children[0])), createNode(NODE_FUNC, FUNC_CSCH, node.children[0]));
          break;
		    case FUNC_ACSC:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL,node.children[0], createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, construct(OP_POW, node.children[0], createNode(NODE_INT, 2)), createNode(NODE_INT, 1)))));
          break;
        case FUNC_CSC:
          ret = construct(OP_MUL,construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), createNode(NODE_FUNC, FUNC_COT, node.children[0])), createNode(NODE_FUNC, FUNC_CSC, node.children[0]));
          break;
        case FUNC_ACOTH:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_SUB, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_COTH:
          ret = construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_POW, createNode(NODE_FUNC, FUNC_CSCH, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_ACOT:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_COT:
          ret = construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_POW, createNode(NODE_FUNC, FUNC_CSC, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_SQRT:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_MUL,createNode(NODE_INT, 2), createNode(NODE_FUNC, FUNC_SQRT, node.children[0])));
          break;
        case FUNC_EXP:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_EXP, node.children[0]));
          break;
        case FUNC_NLOG:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), node.children[0]);
          break;
        case FUNC_BLOG:
          ret = construct(OP_DIV, symbolic_diff(node.children[1]), construct(OP_MUL,node.children[1], createNode(NODE_FUNC, FUNC_NLOG, node.children[0])));
          break;
      }
      break;

    case NODE_SYM:
      if(node.value == "x")
        ret = createNode(NODE_INT, 1);
      else
        ret = createNode(NODE_INT, 0);
      break;

    case NODE_INT:
      ret = createNode(NODE_INT, 0);
      break;
  }

  return ret;
}

function step_diff(node)
{
  var n = new step_diff_obj(node);
  //n.expression = n.step_diff_wh(n.expression);
  while(1)
  {
    n.expression = n.step_diff_rec(n.expression);
    if(n.diff_found == false)
    {
      n.ret += "Result is:"
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

function step_diff_obj(node)
{
  this.expression = createNode(NODE_FUNC, FUNC_DIFF, JSON.parse(JSON.stringify(node)));
  this.ret = "Possible derivation:$$"+toTex(this.expression)+"$$";
  this.diff_found = false;
  this.box = 0;
};

step_diff_obj.prototype.step_diff_rec = function (node)
{
  var ret = this.step_diff_check(node);
  if(this.diff_found)
  {
    return ret;
  }
  for(var i=0; i<ret.children.length; i++)
  {
    ret.children[i] = this.step_diff_check(ret.children[i]);
  }
  return ret;
}

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

// Step-by-step Diff (u)
step_diff_obj.prototype.step_diff_execute = function(node)
{
  var ret = 0;
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
        case OP_SUB:
          ret = construct(OP_SUB, symbolic_diff(node.children[0]), symbolic_diff(node.children[1]));
          break;
        case OP_DIV:
          if(is_fraction(node))
          {
            ret += "The derivative of a constant is zero:";
            ret += "$$d/{dx}("+toTex(node)+")=0$$";
          }
          else
          {
            ret = construct(OP_DIV, construct(OP_SUB, construct(OP_MUL, symbolic_diff(node.children[0]), node.children[1]), construct(OP_MUL, symbolic_diff(node.children[1]), node.children[0])), construct(OP_POW, node.children[1], createNode(NODE_INT, 2)));
          }
          break;
        case OP_MUL:
          var fac = factor_out(node, "x");
          if(fac[0] !== undefined && fac[1] === undefined) //only constants
          {
            ret += "The derivative of a constant is zero:";
            ret += "$$d/{dx}("+toTex(node)+")=0$$";
          }
          else if(fac[0] === undefined && fac[1] !== undefined) //only variables
          {
            ret += "not implemented yet";
          }
          else
          {
            ret += "Factor out constants:";
            ret += "$$="+toTex(fac[0])+"(d/{dx}("+toTex(fac[1])+"))$$";
            ret += step_diff(fac[1]);
          }
          // if(node.children.length == 2)
          // {
          //   ret = construct(OP_ADD, construct(OP_MUL, symbolic_diff(node.children[0]), node.children[1]), construct(OP_MUL, node.children[0], symbolic_diff(node.children[1])));
          // }
          // else
          // {
          //   var children = node.children.slice(1);
          //   ret = construct(OP_ADD, construct(OP_MUL, symbolic_diff(node.children[0]), construct(OP_MUL, children)), construct(OP_MUL, node.children[0], symbolic_diff(construct(OP_MUL, children))));
          // }
          //ret = construct(OP_ADD, construct(OP_MUL, symbolic_diff(node.children[0]), node.children[1]), construct(OP_MUL, symbolic_diff(node.children[1]), node.children[0]));
          break;
        case OP_NEG:
          ret = construct(OP_NEG, symbolic_diff(node.children[0]));
          break;
        case OP_POW:
          // constant
          if(free_of_symbol(node.children[0], "x") && free_of_symbol(node.children[1], "x"))
          {
            ret += "The derivative of a constant is zero:";
            ret += "$$d/{dx}("+toTex(node)+")=0$$";
          }
          // power x^(constant)
          else if(is_symbol(node.children[0], "x") && free_of_symbol(node.children[1], "x"))
          {
            ret += "Use the power rule, $d/{dx}(x^{n})=n x^{n-1}$, where $n="+toTex(node.children[1])+"$";
            ret += "$$d/{dx}("+toTex(node)+")="+toTex(automatic_simplify(symbolic_diff(node)))+"$$";
          }
          // power (variable)^(constant)
          else if(!free_of_symbol(node.children[0], "x") && free_of_symbol(node.children[1], "x"))
          {
            ret += "Use the chain rule, $d/{dx}("+toTex(node)+")=d/{du}(u^{"+toTex(node.children[1])+"}) d/{dx}("+toTex(node.children[0])+")$, where $u="+toTex(node.children[0])+"$";
            ret += "$$d/{dx}("+toTex(node)+")="+toTex(automatic_simplify(symbolic_diff(node)))+"$$";
          }
          //ret = construct(OP_ADD, construct(OP_MUL, construct(OP_MUL, node.children[1], construct(OP_POW, node.children[0], construct(OP_SUB, node.children[1], createNode(NODE_INT, 1)))), symbolic_diff(node.children[0])), construct(OP_MUL, construct(OP_MUL, construct(OP_POW, node.children[0], node.children[1]), createNode(NODE_FUNC, FUNC_NLOG, node.children[0])), symbolic_diff(node.children[1])));
          break;
      }
      break;

    case NODE_FUNC:
      switch(node.value)
      {
        case FUNC_SIN:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_COS, node.children[0]));
          break;
        case FUNC_COS:
          ret = construct(OP_NEG, construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SIN, node.children[0])));
          break;
        case FUNC_ASINH:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))));
          break;
        case FUNC_SINH:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_COSH, node.children[0]));
          break;
        case FUNC_ASIN:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))));
          break;
        case FUNC_ACOSH:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, construct(OP_POW, node.children[0], createNode(NODE_INT, 2)), createNode(NODE_INT, 1))));
          break;
        case FUNC_COSH:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SINH, node.children[0]));
          break;
        case FUNC_ACOS:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, 1, construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))));
          break;
        case FUNC_ATANH:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_SUB, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_TANH:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_SECH, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_ATAN:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_TAN:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_SEC, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_ASECH:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL,construct(OP_MUL,node.children[0], creteNode(NODE_FUNC, FUNC_SQRT, construct(OP_DIV, construct(OP_SUB, createNode(NODE_INT, 1), node.children[0]), construct(OP_ADD,1, node.children[0])))), construct(OP_ADD,1, node.children[0])));
          break;
        case FUNC_SECH:
          ret = construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL,createNode(NODE_FUNC, FUNC_SECH, node.children[0]), createNode(NODE_FUNC, FUNC_TANH, node.children[0])));
          break;
        case FUNC_ASEC:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_MUL,node.children[0], createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, construct(OP_POW, node.children[0], createNode(NODE_INT, 2)), createNode(NODE_INT, 1)))));
          break;
        case FUNC_SEC:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), construct(OP_MUL,createNode(NODE_FUNC, FUNC_TAN, node.children[0]), createNode(NODE_FUNC, FUNC_SEC, node.children[0])));
          break;
        case FUNC_ACSCH:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL,createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_DIV, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))))), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_CSCH:
          ret = construct(OP_MUL,construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), createNode(NODE_FUNC, FUNC_COTH, node.children[0])), createNode(NODE_FUNC, FUNC_CSCH, node.children[0]));
          break;
		    case FUNC_ACSC:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL,node.children[0], createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, construct(OP_POW, node.children[0], createNode(NODE_INT, 2)), createNode(NODE_INT, 1)))));
          break;
        case FUNC_CSC:
          ret = construct(OP_MUL,construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), createNode(NODE_FUNC, FUNC_COT, node.children[0])), createNode(NODE_FUNC, FUNC_CSC, node.children[0]));
          break;
        case FUNC_ACOTH:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_SUB, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_COTH:
          ret = construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_POW, createNode(NODE_FUNC, FUNC_CSCH, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_ACOT:
          ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
          break;
        case FUNC_COT:
          ret = construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_POW, createNode(NODE_FUNC, FUNC_CSC, node.children[0]), createNode(NODE_INT, 2)));
          break;
        case FUNC_SQRT:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_MUL,createNode(NODE_INT, 2), createNode(NODE_FUNC, FUNC_SQRT, node.children[0])));
          break;
        case FUNC_EXP:
          ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_EXP, node.children[0]));
          break;
        case FUNC_NLOG:
          ret = construct(OP_DIV, symbolic_diff(node.children[0]), node.children[0]);
          break;
        case FUNC_BLOG:
          ret = construct(OP_DIV, symbolic_diff(node.children[1]), construct(OP_MUL,node.children[1], createNode(NODE_FUNC, FUNC_NLOG, node.children[0])));
          break;
      }
      break;

    case NODE_SYM:
      if(node.value == "x")
      {
        this.ret += "The derivative of a $x$ is $1$:";
        ret = createNode(NODE_INT, 1);
      }
      else
      {
        this.ret += "The derivative of a constant is zero:";
        ret = createNode(NODE_INT, 0);
      }
      break;

    case NODE_INT:
      this.ret += "The derivative of a constant is zero:";
      ret = createNode(NODE_INT, 0);
      break;
  }
  return ret;
}

// // Step-by-step Diff (u)
// function step_diff(node)
// {
//   var ret = "";
//
//   if(!node)
//     return 0;
//
//   switch(node.type)
//   {
//     case NODE_OP:
//       switch(node.value)
//       {
//         case OP_ADD:
//           ret += "Differentiate the sum term by term:";
//           var children = new Array();
//           var tex_children = new Array();
//           for(var i = 0; i < node.children.length; i++)
//           {
//             tex_children[i] = "d/{dx}("+toTex(node.children[i])+")";
//             children[i] = step_diff(node.children[i]);
//           }
//           ret += "$$="+tex_children.join("+")+"$$";
//           for(var i = 0; i < node.children.length; i++)
//           {
//             ret += children[i];
//           }
//           break;
//         case OP_SUB:
//           ret = construct(OP_SUB, symbolic_diff(node.children[0]), symbolic_diff(node.children[1]));
//           break;
//         case OP_DIV:
//           if(is_fraction(node))
//           {
//             ret += "The derivative of a constant is zero:";
//             ret += "$$d/{dx}("+toTex(node)+")=0$$";
//           }
//           else
//           {
//             ret = construct(OP_DIV, construct(OP_SUB, construct(OP_MUL, symbolic_diff(node.children[0]), node.children[1]), construct(OP_MUL, symbolic_diff(node.children[1]), node.children[0])), construct(OP_POW, node.children[1], createNode(NODE_INT, 2)));
//           }
//           break;
//         case OP_MUL:
//           var fac = factor_out(node, "x");
//           if(fac[0] !== undefined && fac[1] === undefined) //only constants
//           {
//             ret += "The derivative of a constant is zero:";
//             ret += "$$d/{dx}("+toTex(node)+")=0$$";
//           }
//           else if(fac[0] === undefined && fac[1] !== undefined) //only variables
//           {
//             ret += "not implemented yet";
//           }
//           else
//           {
//             ret += "Factor out constants:";
//             ret += "$$="+toTex(fac[0])+"(d/{dx}("+toTex(fac[1])+"))$$";
//             ret += step_diff(fac[1]);
//           }
//           // if(node.children.length == 2)
//           // {
//           //   ret = construct(OP_ADD, construct(OP_MUL, symbolic_diff(node.children[0]), node.children[1]), construct(OP_MUL, node.children[0], symbolic_diff(node.children[1])));
//           // }
//           // else
//           // {
//           //   var children = node.children.slice(1);
//           //   ret = construct(OP_ADD, construct(OP_MUL, symbolic_diff(node.children[0]), construct(OP_MUL, children)), construct(OP_MUL, node.children[0], symbolic_diff(construct(OP_MUL, children))));
//           // }
//           //ret = construct(OP_ADD, construct(OP_MUL, symbolic_diff(node.children[0]), node.children[1]), construct(OP_MUL, symbolic_diff(node.children[1]), node.children[0]));
//           break;
//         case OP_NEG:
//           ret = construct(OP_NEG, symbolic_diff(node.children[0]));
//           break;
//         case OP_POW:
//           // constant
//           if(free_of_symbol(node.children[0], "x") && free_of_symbol(node.children[1], "x"))
//           {
//             ret += "The derivative of a constant is zero:";
//             ret += "$$d/{dx}("+toTex(node)+")=0$$";
//           }
//           // power x^(constant)
//           else if(is_symbol(node.children[0], "x") && free_of_symbol(node.children[1], "x"))
//           {
//             ret += "Use the power rule, $d/{dx}(x^{n})=n x^{n-1}$, where $n="+toTex(node.children[1])+"$";
//             ret += "$$d/{dx}("+toTex(node)+")="+toTex(automatic_simplify(symbolic_diff(node)))+"$$";
//           }
//           // power (variable)^(constant)
//           else if(!free_of_symbol(node.children[0], "x") && free_of_symbol(node.children[1], "x"))
//           {
//             ret += "Use the chain rule, $d/{dx}("+toTex(node)+")=d/{du}(u^{"+toTex(node.children[1])+"}) d/{dx}("+toTex(node.children[0])+")$, where $u="+toTex(node.children[0])+"$";
//             ret += "$$d/{dx}("+toTex(node)+")="+toTex(automatic_simplify(symbolic_diff(node)))+"$$";
//           }
//           //ret = construct(OP_ADD, construct(OP_MUL, construct(OP_MUL, node.children[1], construct(OP_POW, node.children[0], construct(OP_SUB, node.children[1], createNode(NODE_INT, 1)))), symbolic_diff(node.children[0])), construct(OP_MUL, construct(OP_MUL, construct(OP_POW, node.children[0], node.children[1]), createNode(NODE_FUNC, FUNC_NLOG, node.children[0])), symbolic_diff(node.children[1])));
//           break;
//       }
//       break;
//
//     case NODE_FUNC:
//       switch(node.value)
//       {
//         case FUNC_SIN:
//           ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_COS, node.children[0]));
//           break;
//         case FUNC_COS:
//           ret = construct(OP_NEG, construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SIN, node.children[0])));
//           break;
//         case FUNC_ASINH:
//           ret = construct(OP_DIV, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))));
//           break;
//         case FUNC_SINH:
//           ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_COSH, node.children[0]));
//           break;
//         case FUNC_ASIN:
//           ret = construct(OP_DIV, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))));
//           break;
//         case FUNC_ACOSH:
//           ret = construct(OP_DIV, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, construct(OP_POW, node.children[0], createNode(NODE_INT, 2)), createNode(NODE_INT, 1))));
//           break;
//         case FUNC_COSH:
//           ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_SINH, node.children[0]));
//           break;
//         case FUNC_ACOS:
//           ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, 1, construct(OP_POW, node.children[0], createNode(NODE_INT, 2)))));
//           break;
//         case FUNC_ATANH:
//           ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_SUB, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
//           break;
//         case FUNC_TANH:
//           ret = construct(OP_MUL, symbolic_diff(node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_SECH, node.children[0]), createNode(NODE_INT, 2)));
//           break;
//         case FUNC_ATAN:
//           ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
//           break;
//         case FUNC_TAN:
//           ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_POW, createNode(NODE_FUNC, FUNC_SEC, node.children[0]), createNode(NODE_INT, 2)));
//           break;
//         case FUNC_ASECH:
//           ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL,construct(OP_MUL,node.children[0], creteNode(NODE_FUNC, FUNC_SQRT, construct(OP_DIV, construct(OP_SUB, createNode(NODE_INT, 1), node.children[0]), construct(OP_ADD,1, node.children[0])))), construct(OP_ADD,1, node.children[0])));
//           break;
//         case FUNC_SECH:
//           ret = construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL,createNode(NODE_FUNC, FUNC_SECH, node.children[0]), createNode(NODE_FUNC, FUNC_TANH, node.children[0])));
//           break;
//         case FUNC_ASEC:
//           ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_MUL,node.children[0], createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, construct(OP_POW, node.children[0], createNode(NODE_INT, 2)), createNode(NODE_INT, 1)))));
//           break;
//         case FUNC_SEC:
//           ret = construct(OP_MUL, symbolic_diff(node.children[0]), construct(OP_MUL,createNode(NODE_FUNC, FUNC_TAN, node.children[0]), createNode(NODE_FUNC, FUNC_SEC, node.children[0])));
//           break;
//         case FUNC_ACSCH:
//           ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL,createNode(NODE_FUNC, FUNC_SQRT, construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_DIV, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))))), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
//           break;
//         case FUNC_CSCH:
//           ret = construct(OP_MUL,construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), createNode(NODE_FUNC, FUNC_COTH, node.children[0])), createNode(NODE_FUNC, FUNC_CSCH, node.children[0]));
//           break;
// 		    case FUNC_ACSC:
//           ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_MUL,node.children[0], createNode(NODE_FUNC, FUNC_SQRT, construct(OP_SUB, construct(OP_POW, node.children[0], createNode(NODE_INT, 2)), createNode(NODE_INT, 1)))));
//           break;
//         case FUNC_CSC:
//           ret = construct(OP_MUL,construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), createNode(NODE_FUNC, FUNC_COT, node.children[0])), createNode(NODE_FUNC, FUNC_CSC, node.children[0]));
//           break;
//         case FUNC_ACOTH:
//           ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_SUB, createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
//           break;
//         case FUNC_COTH:
//           ret = construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_POW, createNode(NODE_FUNC, FUNC_CSCH, node.children[0]), createNode(NODE_INT, 2)));
//           break;
//         case FUNC_ACOT:
//           ret = construct(OP_DIV, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_ADD,createNode(NODE_INT, 1), construct(OP_POW, node.children[0], createNode(NODE_INT, 2))));
//           break;
//         case FUNC_COT:
//           ret = construct(OP_MUL, construct(OP_NEG, symbolic_diff(node.children[0])), construct(OP_POW, createNode(NODE_FUNC, FUNC_CSC, node.children[0]), createNode(NODE_INT, 2)));
//           break;
//         case FUNC_SQRT:
//           ret = construct(OP_DIV, symbolic_diff(node.children[0]), construct(OP_MUL,createNode(NODE_INT, 2), createNode(NODE_FUNC, FUNC_SQRT, node.children[0])));
//           break;
//         case FUNC_EXP:
//           ret = construct(OP_MUL, symbolic_diff(node.children[0]), createNode(NODE_FUNC, FUNC_EXP, node.children[0]));
//           break;
//         case FUNC_NLOG:
//           ret = construct(OP_DIV, symbolic_diff(node.children[0]), node.children[0]);
//           break;
//         case FUNC_BLOG:
//           ret = construct(OP_DIV, symbolic_diff(node.children[1]), construct(OP_MUL,node.children[1], createNode(NODE_FUNC, FUNC_NLOG, node.children[0])));
//           break;
//       }
//       break;
//
//     case NODE_SYM:
//       if(node.value == "x")
//       {
//         ret += "The derivative of a $x$ is $1$:";
//         ret += "$$d/{dx}("+toTex(node)+")=1$$";
//       }
//       else
//       {
//         ret += "The derivative of a constant is zero:";
//         ret += "$$d/{dx}("+toTex(node)+")=0$$";
//       }
//       break;
//
//     case NODE_INT:
//       ret += "The derivative of a constant is zero:";
//       ret += "$$d/{dx}("+toTex(node)+")=0$$";
//       break;
//   }
//
//   return ret;
// }
