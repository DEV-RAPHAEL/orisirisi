 /* FIRST CLASS FUNCTIONS */
/*
 Functions are treated the same way as Objects
        Can be assigned to variables, array values, object values.
        Can be passedas arguments to other Functions
        can be returned to functions
Allows the creation of higgher-order functions
        Either takes one or more functions as arguments or returns a function
        map(), filter(), reduce().
 */
/* Search array.prototype.map */
let x = [0,1,2,3,4];
// undefined
console.log(x);
// [0,1,2,3,4]
x.map
// [function : map] or ƒ map() { [native code] }
/* To change x to 1234 */
function addOne(x) {return x + 1; }
// undefined
addOne(1)
//2
x.map(addOne)
//[1,2,3,4]
/* With the filter function you can filter some values out */
x.filter (function (x) {return (x % 2) === 0 })
//[0,2,4]
/* The code below assigns a variable to our filtered data som as to be useful later */
var filtered = x.filter (function (x) {return (x % 2) === 0})
// [0,2,4]
filtered
// [0,2,4]
