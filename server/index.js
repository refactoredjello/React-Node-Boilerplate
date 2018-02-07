const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname + '/../client/dist/')))


module.exports = app