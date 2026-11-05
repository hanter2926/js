function oderfood(customer, callback){
    console.log("I want to oder " + customer);

    setTimeout(()=>{
        console.log("Food is ready pliase wait for some time " + customer);
        
        setTimeout(()=>{
            console.log("Food is going to deliver "+ customer);

            setTimeout(()=>{
                console.log("out of delivery collact you food "+ customer);
                callback();
            }, 3000);
            

        },4000);
    },5000);  
}

function deliverfood(){
    console.log("Food is delivered");
}

oderfood("Vikram", deliverfood);
