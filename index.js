const express = require('express')
const path = require('path')
const logger = require('./middleware/logger')
const members = require('./Members')

const app = express()

//Initialize it..., INIT MIDDLEWARE
app.use(logger)

//Gets All Members
app.get('/api/members', (req, res) => res.json(members))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) })