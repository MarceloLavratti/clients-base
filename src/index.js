const express = require('express')
const mongoose = require('mongoose')
const clientRoutes = require('./routes/clientRoutes.js')
const app = express()
const port = 3000

app.use(express.json())

mongoose.connect('mongodb+srv://marcelol:raft1001@nodejs-cluster.nmznv1r.mongodb.net/?retryWrites=true&w=majority&appName=nodejs-cluster')

app.use('/', clientRoutes)

app.listen(port, () => {
    console.log('App running on port', port)
})