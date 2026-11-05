let num = 13; // global 
console.log(num);

function disp(){
    console.log(num);
    if(num){
        let num1=14; //local
        console.log(num);
        console.log(num1);
    }
}
disp();