    

console.log(typeof x);    // undefined
console.log(typeof 10);   // number
console.log(typeof 'abc'); // string
console.log(typeof true);  // boolean

console.log(typeof function () {});  //function

console.log(typeof [1, 'a', true]);  //object
console.log(typeof { a: 10, b: 20 });  //object
console.log(typeof null);  //object
console.log(typeof new Number(10));  //object
