// function oderfood(customer, callback){
//     console.log("I want to oder " + customer);

//     setTimeout(()=>{
//         console.log("Food is ready pliase wait for some time " + customer);
        
//         setTimeout(()=>{
//             console.log("Food is going to deliver "+ customer);

//             setTimeout(()=>{
//                 console.log("out of delivery collact you food "+ customer);
//                 callback();
//             }, 3000);
            

//         },4000);
//     },5000);  
// }

// function deliverfood(){
//     console.log("Food is delivered enjoy your food");
// }

// oderfood("Vikram", deliverfood);



// promise pattern

function oderfood(customer){
    return new Promise((resolve, reject)=>{
        console.log("I want to oder " + customer);

    setTimeout(()=>{
        console.log("Food is ready pliase wait for some time " + customer);
        
        setTimeout(()=>{
            console.log("Food is going to deliver "+ customer);

            setTimeout(()=>{
                console.log("out of delivery collact you food "+ customer);
                resolve("Food is delivered enjoy your food");
               
            }, 3000);
            reject("Food is not delivered");          
            
        },4000);
        
    },5000);  


    })

 }   

 async function runOderfood(customer){
    try{
        const result =await oderfood("customer");
        console.log(result);
    }catch(error){
        console.log("error",error);

    }
 }
    



runOderfood("Vikram  Pal");