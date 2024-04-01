setTimeout(() => {
    console.log("Two seconds are up")
}, 2000);

const names=['Medini','San','Rad']
const shortNames=names.filter((name)=>{
    return name.length<=4
})

const geocode=(address,callback)=>{
    setTimeout(() => {
        const data={
            loc_key:1
        }
        // return data // gives undefined in data
        // instead call the callback function
        callback(data)
    }, 2000);
}

// const data=geocode("Mysore") // gives undefined in asynchronous case
// console.log(data)
// so use this
// i.e pass data as an argument to that call back so that we can store return value there
geocode('Mysore',(data)=>{
    console.log(data)
})