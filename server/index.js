const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())
app.use(express.static(path.resolve(__dirname + '/../client/dist/')))


module.exports = app