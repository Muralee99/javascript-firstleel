/* Write a Program to convert an array of objects to an object
	based on a given key */



	// Write your code here

function convert(array, keyField){
if(array instanceof Array){
	return array.reduce(function (obj, item) {
		 obj[item[keyField]] = item
		return obj
  }, {});
}else return null;

}
	

	


/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;

