const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(a<0||b<0){
                return reject("Numbers should be positive")
            }
            resolve(a+b)
        }, 2000);
    })
}

const doWork=async ()=>{
    // throw new Error("Something went wrong")
    // return "medini"
    const sum=  await add(1,99)
    const sum2=await add(sum,-50)
    const sum3=await add(sum2,100)
    return sum3
}

// console.log(doWork())

doWork().then((res)=>{
    console.log(res," is the result")
}).catch((e)=>{
    console.log(e," is the error")
})