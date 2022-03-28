var x = 43;
var y = x;
var y = 50;
console.log('x :' + x);
console.log('y :' + y);
//x remains constant... It passes by value

var obj1 = {}
var obj2 = obj1
obj2.test = 'test'
console.log(JSON.stringify(obj1));
// Obj1 changes to test which is same as obj2... it passes by reference

obj2.arr = [];
var x = obj2.arr;
x.push(1);
console.log(JSON.stringify(obj1));  
// 1 is passed to the array due to the fact that obj2 passes by reference

// PRIMITIVES ARE IMMUTAVBLE WHILE OBJECTS ARE MUTABLE
