// var asyncAdd = (a,b)=>{
//     return new Promise((resolve,reject)=>{
//         if(typeof a==='number' && typeof b==='number'){
//             setTimeout(()=>{
//              resolve(a+b);
//             },1500)
//         }
//         else{
//             reject("Arguments must be numbers");
//         }
//     })
// }

// asyncAdd(5,7).then((message)=>{
// console.log("Sum : ",message)
// },(errorMessage)=>{
// console.log(errorMessage);
// })


var asyncAdd=(a,b)=>{
    return new Promise((resolve,reject)=>{
        if(typeof a === 'number' && typeof b === 'number'){
            setTimeout(()=>{
                resolve(a+b);
            },1500)
        }
        else{
            reject("Arguments must be numbers");
        }
    })
}

asyncAdd(5,'7').then((message)=>{
console.log("Sum :",message);
return asyncAdd(message,33);
}
,(errorMessage)=>{
console.log(errorMessage);
}).then((message)=>{
console.log("Should be 45 =>",message);
}
,
// (errorMessage)=>{
// console.log(errorMessage);
// }
)
.catch((errorMessage)=>{
console.log(errorMessage);
})



// var somePromise= new Promise((resolve,reject)=>{
// // resolve('Hey. It worked!');
// setTimeout(()=>{
// // resolve("Hey. It worked!");
// reject("Unable to fulfill promise");
// },2500)


// })

// somePromise.then((successMessage) => {
//     console.log("Success",message);
// },
// (errorMessage)=>{
//     console.log("errorMessage",errorMessage);
// }
// )
