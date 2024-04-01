const square=function(x){
    return x*x
}

const squarearrow=(x)=>{
    return x*x
}

const squarearr2=(x)=>x*x
console.log(square(3))
console.log(squarearrow(3))
console.log(squarearr2(3))

// object in js
const event={
    name: 'birthday party',
    guestList:['Med','San','Rad'],
    printGuestList(){
        console.log('Guest list for '+this.name)
        this.guestList.forEach((Guest)=>{
            console.log(Guest+ " is attending "+this.name)
        })
    }
    // printGuestList: function(){
    //     console.log('Guest list for '+this.name)
    // }
}

event.printGuestList()