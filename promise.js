// console.log("start")

// const obj=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const pin = 2212
//         if(pin ===2212){
//             resolve("pin is correct")
//         }else{
//             reject("pin is incorrect")
//         }
//     }, 5000)
// })
// obj.then(res=>console.log(res))
//     .catch(err=>console.log(err))
// console.log("End!!!");




// console.log("start")

// const obj=new Promise((resolve, reject)=>{
//     console.log("panding... <pending>", )
//     setTimeout(()=>{
//         const pin = 2212
//         if(pin ===2212){
//             resolve("pin is correct" )
//         }else{
//             reject("pin is incorrect")
//         }
//     }, 5000)
// })
// obj.then(res=>console.log(res))
//     .catch(err=>console.log(err))
// console.log("End!!!");


console.log("start")

const obj=new Promise((resolve, reject)=>{
    console.log("panding... <pending>", )
    setTimeout(()=>{
        const pin = 2212
        if(pin ===2222){
            resolve("pin is correct" )
        }else{
            reject("pin is incorrect")
        }
    }, 5000)
})
obj.then(res=>console.log(res))
    .catch(err=>console.log(err))
console.log("End!!!");