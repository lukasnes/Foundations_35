let arr = ["Lukas","Tobin","Draden","Casey","Anthony"]

module.exports = {
    getNames: (req,res) => {
        res.status(200).send(arr)
    },
    addName: (req,res) => {
        arr.push(req.params.name)
        res.status(200).send(arr)
    },
    deleteName: (req,res) => {
        let { index } = req.params
        arr.splice(+index,1)
        res.status(200).send(arr)
    },
    editNames: (req,res) => {
        let { index, newName } = req.body
        arr.splice(+index,1,newName)
        res.status(200).send(arr)
    }
}