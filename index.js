// Main application starting point

const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan') // logging framework
const app = express()
const router = require('./router')
const mongoose = require('mongoose')
const cors = require('cors')

// hey mongoose, go talk to this mongodb db
// db setup
mongoose.connect('mongodb://localhost:auth/auth')

// App Setup (mostly middleware)
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json({ type: '*/*' }))
router(app)

// Server Setup
const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)
console.log('Server listening on:', port)
 
