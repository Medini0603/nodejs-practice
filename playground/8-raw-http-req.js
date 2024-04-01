//to do work without postman-request module
const { error } = require('console')
const http=require('http')

api_key="oK56SXqsHx29zG4HkGOHdrYUV61qG8Rz"
url=`http://dataservice.accuweather.com/forecasts/v1/minute?apikey=${api_key}&q=40,-75`

const req=http.request(url,(response)=>{
    //initialize empty string
    let data=''
    response.on('data',(chunk)=>{
        data=data+chunk.toString()
        
    })
    response.on('end',()=>{
        // console.log(data)
        const body=JSON.parse(data)
        console.log(body)
        
    })
})

req.on('error',(error)=>{
    console.log("an error",error)
})
req.end()