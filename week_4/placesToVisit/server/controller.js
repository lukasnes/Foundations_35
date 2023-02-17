let places = [
    {
        place: "Germany",
        visited: true
    },
    {
        place: "Mexico",
        visited: false
    }
]




module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getPlaces: (req,res) => {
        res.status(200).send(places)
    },
    addPlace: (req,res) => {
        places.push(req.body)
        res.status(200).send(places)
    },
    changeVisit: (req,res) => {
        let { index } = req.body
        places[+index].visited = !places[+index].visited
        res.status(200).send(places)
    },
    deletePlace: (req,res) => {
        let { index } = req.params
        places.splice(+index,1)
        res.status(200).send(places)
    }

}