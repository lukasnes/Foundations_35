const button = document.querySelector('button')
const list = document.querySelector('ul')

const errCallback = err => console.log(err)

const getAlderaan = evt => {
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
        .then(response => {
            console.log(response.data)
            console.log(response.data.results)
            console.log(response.data.results[0])

            let { residents } = response.data.results[0]
            console.log(residents)
            getResidents(residents)
        })
        .catch(errCallback)
}

const getResidents = arr => {
    list.innerHTML = ""
    arr.forEach(resident => {
        axios.get(resident)
            .then(response => {
                console.log(response.data)
                let { name } = response.data

                let listItem = document.createElement('li')
                listItem.textContent = name

                list.appendChild(listItem)
            })
            .catch(errCallback)
    })
}

button.addEventListener('click', getAlderaan)