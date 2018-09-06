var request=require('request');

var geocodeAddress = (address,callback) => {
var encodedAddress=encodeURIComponent(address);



request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json:true
},
(error,response,body)=>{
// console.log(JSON.stringify(error,undefined,2));
if(error){
    // console.log("Can't able to connect with Google servers");
    callback("Can't able to connect with Google servers");
}
else if(body.status === 'ZERO_RESULTS'){
    // console.log("Address not found , please type valid address");
    callback("Address not found , please type valid address")
}
else if(body.status === "OK"){
// console.log(`Address ${body.results[0].formatted_address}`);
// console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
// console.log(`Longitude: ${body.results[0].geometry.location.lng}`);

callback(undefined,{
Address:   body.results[0].formatted_address,
Latitude:  body.results[0].geometry.location.lat,
Longitude: body.results[0].geometry.location.lng,
})

}

})



// 2418544cdcb920f9dbfb09ed5d47ce05


}


module.exports={
    geocodeAddress
}