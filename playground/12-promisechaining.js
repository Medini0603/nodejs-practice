const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(a+b)
        }, 2000);
    })
}

//complex without promises also we have duplicate code
// add(1,3).then((sum)=>{
//     console.log(sum)
//     add(sum,5).then((sum2)=>{
//         console.log(sum2)
//     }).catch((e)=>{
//         console.log(e)
//     })
// }).catch((e)=>{
//     console.log(e)
// })

//with chaining  only 1 catch errors also no nesting
add(1,3).then((sum)=>{
    console.log(sum)
    return add(sum,5)
}).then((sum2)=>{
    console.log(sum2)
}).catch((e)=>{
    console.log(e)
})