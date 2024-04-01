// //example for asynchronous function

// console.log("starting")


// setTimeout(() => {
//     console.log('2 second timer')
//     //in reality you will have db requests
// }, 2000);

// setTimeout(() => {
//     console.log('0 sec timer')
// }, 0);
// console.log("stopping")

// //output
// // starting
// // stopping
// // 0 sec timer
// // 2 second timer

// //this order is due to the queues
// // call stack
// // node APIs
// //Callback queue

//-----------------------------------------------------------------------------------------------
//using accuwaether api to get weather info 

// https://dataservice.accuweather.com/forecasts/v1/minute?q=37.8267,-122.4233&apikey=oK56SXqsHx29zG4HkGOHdrYUV61qG8Rz
// I1tQAgLJa91zGJmyacMbjOHaZ0S8xLx6 -->api key

//api call to get location based on latitude and longitude
//https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=I1tQAgLJa91zGJmyacMbjOHaZ0S8xLx6&q=14.2958,76.6

// -----------------------------------------------------------------------------------------------

// const request=require('postman-request')

// const apikey="I1tQAgLJa91zGJmyacMbjOHaZ0S8xLx6"
// const apikey2="O29ObFdxCaQd0YJjgjGYFTHrVS8tDg9e"
// const url=`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apikey}&q=14.2958,76.6`
// const url2=`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=Mysore&offset=1`
// request({ url:url2,json:true },(error,response)=>{
//     // console.log(response)
//     // const data=JSON.parse(response.body)
//     // console.log(data)
    
    
//     // console.log(response.body[0].Key)
//     keyvalue=response.body[0].Key
//     // console.log(keyvalue)
//     // note : use `` backticks not '' this ......
//     const url3=`http://dataservice.accuweather.com/currentconditions/v1/${keyvalue}?apikey=${apikey}`
//     request({ url:url3,json:true },(error,r)=>{
//         // console.log(r.body[0].Temperature)
//         weather=r.body[0]
//         console.log('Its currently '+weather.Temperature.Metric.Value+' degree celcius'+ ' and weather feels like '+weather.WeatherText)
//     })
// })
// -------------------------------------------------------------------------------------------


// same as above but with error handling

const request=require('postman-request')

const apikey="I1tQAgLJa91zGJmyacMbjOHaZ0S8xLx6"
const apikey2="O29ObFdxCaQd0YJjgjGYFTHrVS8tDg9e"
const url=`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apikey}&q=14.2958,76.6`
const url2=`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=Mysore&offset=1`
request({ url:url2,json:true },(error,response)=>{

    if(error){
        console.log('Unable to connect to weather service !')
    }
    else if(response.body.length==0){
        console.log("Unable to find location")
        // to test it use the url as  i.e a number instead of word
        // const url2=`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=12344&offset=1`
    }
    else{
    // console.log(response)
    // const data=JSON.parse(response.body)  // not needed if we give json:true in the parameters of request
    // console.log(data)
    

    // console.log(response.body[0].Key)
    keyvalue=response.body[0].Key
    // console.log(keyvalue)
    // note : use `` backticks not '' this ......
    const url3=`http://dataservice.accuweather.com/currentconditions/v1/${keyvalue}?apikey=${apikey}`
    //to generate error
    // const url3=`http://dataservice.accuweather.com/currentconditions/v1/-123?apikey=${apikey}`
    
    request({ url:url3,json:true },(error,r)=>{

        if(error){
            console.log("unable to connect to waether api!")
        }
        //to get to know how it works and stuff use the json string of response or visit the website
        else if(r.body.Code==="400"){
            console.log("Location does not exist!")
        }
        else{
        // console.log(r.body[0].Temperature)
        weather=r.body[0]
        console.log('Its currently '+weather.Temperature.Metric.Value+' degree celcius'+ ' and weather feels like '+weather.WeatherText)
    }})
}})

