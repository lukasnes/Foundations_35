const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

let namesArr = [
    {
        firstName: "Lukas",
        lastName: "Nesittka"
    },
    {
        firstName: "Batuhan",
        lastName: "Sundseth"
    },
    {
        firstName: "Kyle",
        lastName: "Borcik"
    }
]

app.get('/api/names', (req,res) => {
    let fullNamesArr = namesArr.map(namesObj => {
        return `${namesObj.firstName} ${namesObj.lastName}`
    })
    // console.log(fullNamesArr)
    res.status(200).send(fullNamesArr)
})

app.get('/api/names/:type', (req,res) => {
    console.log(req.params)
    let { type } = req.params
    let newNameArr = namesArr.map(namesObj => {
        if(type === "first"){
            return namesObj.firstName
        } else {
            return namesObj.lastName
        }
    })
    console.log(newNameArr)
    res.status(200).send(newNameArr)
})

app.get('/api/first/:compliment', (req,res) => {
    let { compliment } = req.params
    let firstNames = namesArr.map(namesObj => namesObj.firstName)
    let returnStr = `
    <h1 style="color:red;background-color:black;text-align:center">
        The people inside my datalist are ${firstNames}. They are really ${compliment}
    </h1>`
    res.status(200).send(returnStr)
})

app.get('/api/albums/:apple/songs/:banana', (req,res) => {
    console.log(req.params)
    let { album, song } = req.params
    res.status(200).send(`My favorite song from ${album} is ${song}`)
})

app.listen(4000, console.log(`App running on port 4000!`))