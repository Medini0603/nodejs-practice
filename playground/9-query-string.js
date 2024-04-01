const express = require('express')
const app = express()

//OLD STATIC PART OF APP.JS OF WEATHER APP
//setting routes..........
//app.com
//app.com/help
//app.com/about

app.get('', (req, res) => {
    // res.send('Hello express!')
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
    // res.send("help page")
    // res.send({
    //     name:'Medini',
    //     age:22
    // })

    // an array of objects
    res.send([{ name: "medini", age: 22 }, { name: "sannidhi", age: 13 }])
})

app.get('/about', (req, res) => {
    res.send("<h1>About page</h1>")
})



//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
// example of query string
app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "You must provide a search term"
        })
    }
    console.log(req.query)
    // http://localhost:3000/products?search=games&rating=5
    //output on console would be   { search: 'games', rating: '5'}
    console.log(req.query.search)
    res.send({
        products: []
    })
})
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//set up a route to handle unspecified routes i.e.404 PAGES
//404 page
app.get('/help/*', (req, res) => {
    res.send("Help article not found")
    // for http://localhost:3000/help/me
})
app.get('*', (req, res) => {
    res.send('My 404 page')
})
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//listen on port
app.listen(3000, () => {
    console.log("server is up on port 3000")
})


//output at http://localhost:3000/