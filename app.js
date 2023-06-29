const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 8088

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

var routes = require('./routes/index'); //importing route
routes(app); //register the route

// Listen on environment port or 5000
app.listen(port,()=>console.log(`Listen on port ${port}`))