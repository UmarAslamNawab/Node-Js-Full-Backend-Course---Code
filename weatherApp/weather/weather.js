var getWeather=(lat,lng,callback)=>{
    request({
        url:`https://api.darksky.net/forecast/2418544cdcb920f9dbfb09ed5d47ce05/${lat},${lng}`,
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

    })
}

module.exports.getWeather=getWeather;