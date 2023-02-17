const complimentBtn = document.getElementById("complimentButton")
const visitedList = document.querySelector("#visited-list")
const unvisitedList = document.querySelector("#unvisited-list")

const form = document.querySelector('form')
const input = document.querySelector('input')

const baseURL = 'http://localhost:4000/api/places'

const createPlaces = (arr) => {
    visitedList.innerHTML = ""
    unvisitedList.innerHTML = ""

    arr.forEach((placeObj,index) => {
        let { place, visited } = placeObj
        let listItem = document.createElement('li')
        if(visited){
            listItem.innerHTML = `
                <span>${place}</span>
                <button onclick="changeVisit(${index})">Unvisit</button>
                <button onclick="deletePlace(${index})">Delete</button>
            `
            visitedList.appendChild(listItem)
        } else {
            listItem.innerHTML = `
                <span>${place}</span>
                <button onclick="changeVisit(${index})">Visit</button>
                <button onclick="deletePlace(${index})">Delete</button>
            `
            unvisitedList.appendChild(listItem)
        }
    })
}

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getPlaces = () => {
    axios.get(baseURL)
        .then(response => {
            createPlaces(response.data)
        })
        .catch(err => console.log(err))
}

const addPlace = (evt) => {
    evt.preventDefault()

    let bodyObj = {
        place: input.value,
        visited: false
    }

    axios.post(baseURL, bodyObj)
        .then(response => {
            createPlaces(response.data)
        })
        .catch(err => console.log(err))
}

const changeVisit = index => {
    axios.put(baseURL, { index })
        .then(response => {
            createPlaces(response.data)
        })
        .catch(err => console.log(err))
}

const deletePlace = index => {
    axios.delete(baseURL + `/${index}`)
        .then(response => {
            createPlaces(response.data)
        })
        .catch(err => console.log(err))
}

complimentBtn.addEventListener('click', getCompliment)
form.addEventListener('submit', addPlace)
getPlaces()