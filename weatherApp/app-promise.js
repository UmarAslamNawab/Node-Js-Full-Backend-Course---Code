const yargs=require('yargs');
const axios=require('axios')

var addressOptions={
demand:true,
alias:'address',
describe:'Address to fetch weather for',
string:true,
}
var argv=yargs
.options({
    a:addressOptions,  //a is alias(shortForm) of address
})
.help()
.alias('help','h').argv;
console.log('yargsArgv',argv);


var encodedAddress=encodeURIComponent(argv.a);
var geoCodeUrl=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

//get is predefined method of axios that return a promise which can be access by .then & .catch also it provides the json format of data e.g (geoCodeUrl) means you dont need to parse it separately 
//it take promise .then(response) & .catch(error)


axios.get(geoCodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address.');
    }
  
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl=`https://api.darksky.net/forecast/2418544cdcb920f9dbfb09ed5d47ce05/${lat},${lng}`
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
  }).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
  }).catch((error) => {
    if (error.code === 'ENOTFOUND') {
      console.log('Unable to connect to API servers.');
    } else {
      console.log(error.message);
    }
  });
  

