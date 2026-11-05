// function outer(){  // remamber function outer() is a closure that returns an inner function. The inner function has access to the varible count defined in the outer functions.
//     let count = 0;
//     return function inner(){
//         count++;
//         console.log(count);
//     }
// }
// const counter = outer();
// counter();
// counter();
// counter();