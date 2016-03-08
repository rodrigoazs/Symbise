// Basic Algebraic Expressions
// The BAEs are similar to conventional algebraic expressions, except now
// products and sums can have one or more operands [page 80]
// BAE was created to transform a whole expression into BAE. However, in the automatic_simplify this simplification
// is already pro
function BAE_transform(node)
{
	var ret = 0;

	switch(node.type)
  	{
    	case NODE_OP:
    		switch(node.value)
    		{
        		case OP_ADD:
        			var left = BAE_transform(node.children[0]);
        			var right = BAE_transform(node.children[1]);
        			var left_op = kind(left) == OP_ADD ? operands(left) : left;
        			var right_op = kind(right) == OP_ADD ? operands(right) : right;
        			ret = construct(OP_ADD, left_op, right_op);
        			break;
        		case OP_MUL:
        			var left = BAE_transform(node.children[0]);
        			var right = BAE_transform(node.children[1]);
        			var left_op = kind(left) == OP_MUL ? operands(left) : left;
        			var right_op = kind(right) == OP_MUL ? operands(right) : right;
        			ret = construct(OP_MUL, left_op, right_op);
        			break;
        		default:
							var new_childs = new Array();
							for(var i = 0; i < node.children.length; i++) {
								new_childs[i] = BAE_transform(node.children[i]);
							}
							ret = createNodeWithArray(node.type, node.value, new_childs);
        			break;
        	}
        	break;
				case NODE_FUNC:
					var new_childs = new Array();
					for(var i = 0; i < node.children.length; i++) {
						new_childs[i] = BAE_transform(node.children[i]);
					}
					ret = createNodeWithArray(node.type, node.value, new_childs);
					break;
        default:
        	ret = node;
        	break;
    }
    return ret;
}
