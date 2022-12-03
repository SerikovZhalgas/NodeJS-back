const express = require('express')
const cors = require('cors')
const users = require('./users-router')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/users');

    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

//создали express app
const app = express()
const port = 7542

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/users', users)
app.get('/tasks', async (req, res) => {
    res.send('tasks')
})

//в конец добавляем перехватчик middleware
app.use( (req, res)=>{
    res.send({value: 404})
} )

//
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})