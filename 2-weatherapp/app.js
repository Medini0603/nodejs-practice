//refer 1app.js for first and then see this!!!!!!!!!!!!

// -------------------------------------------------------------------------------------------------------
// above one in 1app.js is synchronous fn
// lets make it asynchronous now-------its in utils

const locationkey = require('./utils/geocode')
const forecast = require('./utils/forecast')

// locationkey('Boston',(error,data)=>{
//     console.log('Error',error)
//     console.log('data',data)

//     forecast(data.key,(error,data)=>{
//         console.log('Error',error)
//         console.log('data',data)
//     })
// })

//take input from command line
//to run
// node app.js Udupi
// node app.js "new york"
const address = process.argv[2]
if (!address) {
    console.log("Please provide address")
}
else {
    console.log(process.argv[2])
    // locationkey(address, (error, data) => {
    // using destructuring
    locationkey(address, (error, {key,city,country,state}) => {
        if (error) {
            return console.log('Error', error)
        }

        // forecast(data.key, (error, weatherdata) => {
        // using destructuring
        forecast(key, (error, weatherdata) => {

            if (error) {

                return console.log('Error', error)
            }
            // console.log(data.city, data.country, data.state)
            //using destructuring
            console.log(city, country, state)
            console.log(weatherdata)
        })
    })
}
