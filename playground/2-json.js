const fs=require('fs')
const db=fs.readFileSync('2-json.json')
const d=db.toString()
const u=JSON.parse(d)

u.name='Sangeetha'
u.age=25

const userJSON=JSON.stringify(u)
fs.writeFileSync('2-json.json',userJSON)