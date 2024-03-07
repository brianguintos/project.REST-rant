const express = require('express')
const app = express()

//This is the Home route
app.get ('/', (req, res) => {
    res.send('eatmapuzzy!')
})

app.listen(3000)