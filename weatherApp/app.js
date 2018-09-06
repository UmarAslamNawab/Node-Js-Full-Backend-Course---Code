
// var request=require('request');
// var yargs=require('yargs');
// var geocode=require('./geoCode/geoCode');

// var addressOptions={
// demand:true,
// alias:'address',
// describe:'Address to fetch weather for',
// string:true,
// }
// var argv=yargs
// .options({
//     a:addressOptions,  //a is alias(shortForm) of address
// })
// .help()
// .alias('help','h').argv;
// console.log('yargsArgv',argv);


// geocode.geocodeAddress(argv.a);
// var encodedAddress=encodeURIComponent(argv.a);

// // request({},()=>{})  //general structure

// request({
//     url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
//     json:true
// },
// (error,response,body)=>{
// // console.log(JSON.stringify(error,undefined,2));
// if(error){
//     console.log("Can't able to connect with Google servers");
// }
// else if(body.status === 'ZERO_RESULTS'){
//     console.log("Address not found , please type valid address");
// }
// else if(body.status === "OK"){
// console.log(`Address ${body.results[0].formatted_address}`);
// console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
// console.log(`Longitude: ${body.results[0].geometry.location.lng}`);

// }

// })



// Simplified Form
// var yargs=require('yargs');
// var geocode=require('./geocode/geocode');
// var addressOptions={
// demand:true,
// alias:'address',
// describe:'Address to fetch weather for',
// string:true,
// }

// var argv=yargs
// .options({
//     a:addressOptions,  //a is alias(shortForm) of address
// })
// .help()
// .alias('help','h').argv;
// console.log('yargsArgv',argv);


// geocode.geocodeAddress(argv.a,(errorMessage,result) => {
//     if(errorMessage){
//         console.log(errorMessage);
//     }
//     else{
//         console.log(JSON.stringify(result,undefined,2))
//     }
// });



var request=require('request');

request({
    url:'https://api.darksky.net/forecast/2418544cdcb920f9dbfb09ed5d47ce05/24.9570898,67.0678065',
    json:true
},
    (error,response,body)=>{
        console.log(JSON.stringify(response,undefined,2))
        if(error){
            console.log("Unable to fetch forecast.io server") ;
        }
         else if(response.statusCode === 400){
             console.log("Unable to fetch weather");

         }
         else if(response.statusCode === 200){
             console.log(body.currently.temperature)
         }

        // another simplest way 

        //  if(!error && response.statusCode === 200){
        // console.log(body.currently.temperature); 
        //  }
        //  else{
        //      console.log("Unable to fetch weather");
        //  }
})