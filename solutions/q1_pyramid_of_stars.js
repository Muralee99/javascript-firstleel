/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (rows) => {
	// Write your code here
	var string = '';
if(rows > 0){
	for (var i = 0; i < rows; i++) 
	{ 
	for (var j = 0; j < rows - i; j++) 
	{ 
	 string += " "; 
	} 
	for (var k = 0; k <= i; k++)
	{ 
	 string += "* "; 	
	} 
	 string += " \n"; 
	}	
	return string;
	}
	else
	{
	return '';
	}
}

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
