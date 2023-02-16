const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getNames,
    addName,
    editNames,
    deleteName
} = require('./controller')

app.get('/api/names', getNames)
app.post('/api/names/:name', addName)
app.put('/api/names', editNames)
app.delete('/api/names/:index', deleteName)


app.listen(4000, console.log(`Server running on 4000`))