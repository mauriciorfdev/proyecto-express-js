const express = require('express')
const path = require('path')
const logger = require('./middleware/logger')
const membersRoutes = require('./routes/api/members')

const app = express()

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//Members API Routes
app.use('/api/members', membersRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) })