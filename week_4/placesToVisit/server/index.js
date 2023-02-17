const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getPlaces, addPlace, changeVisit, deletePlace } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/places', getPlaces)
app.post('/api/places', addPlace)
app.put('/api/places', changeVisit)
app.delete('/api/places/:index', deletePlace)

app.listen(4000, () => console.log("Server running on 4000"));
