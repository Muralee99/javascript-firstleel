// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const fruitsArray = [{ name: 'apple', color: 'red', price: 100.0},
				{ name: 'banana', color: 'white', price: 200.0},
				{ name: 'orange', color: 'yellow', price: 300.0}];
				
function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}

var resultObject = search("apple", fruitsArray);				