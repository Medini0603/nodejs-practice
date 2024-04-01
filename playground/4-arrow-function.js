//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],

    // getTasksToDo(){

        // this.tasks.forEach((t)=>{
        //     if(t.completed===false){
        //         console.log(t)
        //     }
        //     else{
        //         continue
        //     }
        // })

        
        // }
        
        getTasksToDo(){
        const tasksToDo=this.tasks.filter((t)=>{
            return t.completed===false
        })
        return tasksToDo
    }
}

console.log(tasks.getTasksToDo())

//example........................................................
const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error!', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})