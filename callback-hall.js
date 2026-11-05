function oderfood(customer, callback){
    console.log("I want to oder " + customer);
    callback();
}

function deliverfood(){
    console.log("Food is delivered");
}

oderfood("Vikram", deliverfood);
