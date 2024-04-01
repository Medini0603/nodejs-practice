const greeter=(name,age)=>{
    console.log('hello',name)
}

greeter("Medini")
//gives undefined if we dont give default param
greeter()

const greeterdef=(name='user',age)=>{
    console.log('hello',name)
}

greeterdef("Medini")
greeterdef()