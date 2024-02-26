const express = require('express')
const path = require('path')
const logger = require('./middleware/logger')
const members = require('./members')

const app = express()

//Initialize it..., INIT MIDDLEWARE
//app.use(logger)

//Gets All Members
app.get('/api/members', (req, res) => res.json(members))

//Get Single User
app.get('/api/members/:id', (req, res) => {
        console.log(members.filter((member)=>{
            return member.id==req.params.id
        }));
        res.end()
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) })