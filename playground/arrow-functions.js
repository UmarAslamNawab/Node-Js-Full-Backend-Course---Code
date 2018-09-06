// var square=(x) => {
//     var result= x * x;
//     return result;
// }
// console.log(square(3));

// var square = (x) => {
//     x * x;
// }
// console.log(square(3));

var square = x =>{
    x*x;
}
console.log(square(3));


var user={
    name:"Umar",
    sayHi:()=>{  // not support 'this' and arrays
        
        console.log(`Hi ${this.name}`);
        console.log(arguments);
    },

    sayHiAlt () {  // new way to write funcions as a object property that supports 'this' and arrays
     console.log(`Hi ${this.name}`);
     console.log(arguments);
    }
}


// user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);