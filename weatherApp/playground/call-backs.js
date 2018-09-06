var getUser=(id,name,callback) => {
    var user={
        id:id,
        name:name,
    }
    // return callback(user);
    // callback(user);
    
    setTimeout(()=>{
        callback(user)
    },3000);
}

getUser(32,"Umar",(userObject) => {
    console.log(userObject);
})