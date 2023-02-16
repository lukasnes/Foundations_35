const form = document.querySelector('form')
const input = document.querySelector('input')
const namesList = document.querySelector('ul')

const baseURL = 'http://localhost:4000/api/names'

const createNamesList = arr => {
    namesList.innerHTML = ""
    arr.forEach((name,index) => {
        let item = document.createElement('li')
        
        let itemSpan = document.createElement('span')
        itemSpan.textContent = name

        let editForm = document.createElement('form')
        let editInput = document.createElement('input')
        let submitBtn = document.createElement('button')
        submitBtn.textContent = "Submit"
        editInput.style.display = "none"
        submitBtn.style.display = "none"
        editForm.appendChild(editInput)
        editForm.appendChild(submitBtn)

        let editBtn = document.createElement('button')
        editBtn.textContent = "Edit"

        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Delete"
        deleteBtn.id = index

        item.appendChild(itemSpan)
        item.appendChild(editForm)
        item.appendChild(editBtn)
        item.appendChild(deleteBtn)

        editBtn.addEventListener('click', (evt) => {
            evt.target.style.display = "none"
            itemSpan.style.display = "none"
            editInput.style.display = "inline"
            submitBtn.style.display = "inline"
        })

        editForm.addEventListener('submit', (evt) => {
            evt.preventDefault()
            let editObj = {
                index,
                newName: editInput.value
            }
            axios.put(baseURL, editObj)
                .then(response => {
                    createNamesList(response.data)
                })
                .catch(err => console.log(err))
        })

        deleteBtn.addEventListener('click', deleteName)

        namesList.appendChild(item)
    })
}

const getNames = () => {
    axios.get(baseURL)
        .then(response => {
            createNamesList(response.data)
        })
        .catch(err => console.log(err))
}

const addName = evt => {
    evt.preventDefault()
    axios.post(baseURL + `/${input.value}`)
        .then(response => {
            createNamesList(response.data)
        })
        .catch(err => console.log(err))
    
    input.value = ""
}

const deleteName = evt => {
    axios.delete(baseURL + `/${evt.target.id}`)
        .then(response => {
            createNamesList(response.data)
        })
        .catch(err => console.log(err))
}


form.addEventListener('submit', addName)
getNames()