const { type } = require("os")

const name='Medini'
const Userage=22

//creating object
const user={
    // name:name,           
    //shorthand for above is just name it understands it as name:name coz the prop and its value has same variable name
    name,
    age:Userage,
    location:'Mysore'
}

console.log(user)

// object destructuring

const product={
    label: 'red notebook',
    price: 20,
    stock:201,
    saleprice:undefined
}

// const label=product.label
// const stock=product.stock

//const {}=object_to_destructure
const {label,stock,rating}=product
console.log(label,stock,rating)
//shows null for rating

// if we want name other than the obj prop name
// also to set default rate if not there then 5 else whatever is there
const {label:l,stock:s,r=5}=product
console.log(l,s,r)

//destruct in function
// const transaction=(type,myproduct)=>{
// const {label}=myproduct
// }
const transaction=(type,{label,stock})=>{
    console.log(type,label,stock)
}
transaction('order',product)
// transaction('order')//huge error i.e. cannot destructuring undefined
//so use default object

//default values
const transactiondef=(type,{label,stock=0}={})=>{
    console.log(type,label,stock)
}
transactiondef('order',product)
transactiondef('order')//gives undefined obj properties

const greet=(name='User')=>{
    console.log("Hello ",name)
}
greet("Medini")
greet()//prints default value i.e. user