// // since
// console.log("Hello Vikram  Pal");
//  function greet(){
//     console.log("How Are You");
//  }
// greet();
// console.log("find");
// console.log("And You");

function print(){
    console.log("I AM Vikram pal");

}
 function add(a,b){
    console.log("Hii ");
    print(); //call function 
    return a + b;
}
 let result = add(5,3); // calling

 console.log(result);
 console.log(++result);
 console.log(++result);
 console.log(++result);
//  console.log(++result);

document.getElementById("output").innerHTML = "Result :- " + result;

