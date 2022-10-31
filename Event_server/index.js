const express = require('express')
const registerData = require('./service/register')
const loginData = require('./service/login')
// const eventData = require('./service/event')
const route=require('./route')
const mongoose=require('./db')
const cors=require('cors')


const app = express()

app.use(cors({
    orgin:'http://localhost:4200'
}))

app.use(express.json())




app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

app.post('/register', (req, res) => {
    registerData.register(req.body.userId,req.body.email,req.body.password,req.body.date_of_birth)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})

app.post('/login', (req, res) => {
    loginData.login(req.body.email, req.body.password)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})

app.use('/api',route)





