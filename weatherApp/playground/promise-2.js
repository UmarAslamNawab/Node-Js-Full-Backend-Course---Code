
var request=require('request');

var geocodeAddress=(address) => {
    return new Promise((resolve,reject) => {
        

        var encodedAddress=encodeURIComponent(address);



        request({
            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json:true
        },
        (error,response,body)=>{
        // console.log(JSON.stringify(error,undefined,2));
        if(error){
            // console.log("Can't able to connect with Google servers");
            reject("Can't able to connect with Google servers");
        }
        else if(body.status === 'ZERO_RESULTS'){
            // console.log("Address not found , please type valid address");
            reject("Address not found , please type valid address")
        }
        else if(body.status === "OK"){
        // console.log(`Address ${body.results[0].formatted_address}`);
        // console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        // console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        
        resolve({
        Address:   body.results[0].formatted_address,
        Latitude:  body.results[0].geometry.location.lat,
        Longitude: body.results[0].geometry.location.lng,
        })
        
        }
        



    })
}
)}

geocodeAddress('0000').then((location)=>{   // this (location) argument is considered to be (success or message) argumnent
    console.log(JSON.stringify(location,undefined,2))
},(errorMessage)=>{
    console.log(errorMessage);
})