const fs=require('fs')

const book={
    title: 'Medini',
    author:'Mediniiii'
}

// some json methods?\
const bookjson=JSON.stringify(book)
// no bookjson is string but not an object 
console.log(bookjson)

const parsedata=JSON.parse(bookjson)
// now parse gives us the result as  json object
console.log(parsedata.author)

// using json data with FileSystem
fs.writeFileSync('1-json.json',bookjson)

const  databuffer=fs.readFileSync('1-json.json')
console.log(databuffer)//just buffer
console.log(databuffer.toString())
const datajson=databuffer.toString()
const data=JSON.parse(datajson)
console.log(data.title)