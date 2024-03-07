require('dotenv').config()
const express = require('express')
const app = express()

//This is the Home route
app.get ('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(3000)