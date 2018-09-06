console.log("Starting up");

setTimeout(()=>{  //setTimeout is a Node API
console.log("1st timeout");
},2000)

setTimeout(()=>{
console.log("2nd Timeout");
},0)

console.log("Finishing up");
