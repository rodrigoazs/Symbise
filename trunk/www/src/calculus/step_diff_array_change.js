function step_diff_array_change(array, pos, items)
{
	var left = array.slice(0, pos);
  var right = array.slice(pos+1);
  var new_array = left.slice(0);
  new_array = new_array.concat(items);
  new_array = new_array.concat(right);
  var return_array = new Array();
  var j = 0;
  for(var i=0; i<new_array.length; i++)
  {
		if(return_array[j] === undefined)
    {
    	if(typeof new_array[i] === 'object')
      {
      	return_array.push(new_array[i]);
        j++;
      }else{
      	return_array.push(new_array[i]);
      }
    }else
    {
    	if(typeof new_array[i] === 'object')
      {
				return_array.push(new_array[i]);
        j += 2;
      }else{
      	return_array[j] += new_array[i];
      }
    }
  }
  return return_array;
}
