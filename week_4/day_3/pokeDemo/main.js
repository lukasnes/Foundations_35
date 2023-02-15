const form = document.querySelector('form')
const input = document.querySelector('input')
const pokeDiv = document.querySelector('.poke-div')

let pokeURL = 'https://pokeapi.co/api/v2'

const createPokeDisplay = obj => {
    pokeDiv.innerHTML = ''

    let { name, spritesArr, typeStr, statObj } = obj
    let pokeName = document.createElement('h1')
    pokeName.textContent = name[0].toUpperCase() + name.slice(1)

    let pokeType = document.createElement('p')
    pokeType.textContent = typeStr

    let imageIndex = 0
    let maxIndex = spritesArr.length - 1

    let imageDiv = document.createElement('div')
    imageDiv.classList.add('poke-stats')
    let prevBtn = document.createElement('button')
    prevBtn.textContent = "<="

    let pokeImg = document.createElement('img')
    pokeImg.src = spritesArr[imageIndex]

    let nextBtn = document.createElement('button')
    nextBtn.textContent = "=>"

    prevBtn.addEventListener('click', (evt) => {
        imageIndex--
        if(imageIndex < 0){
            imageIndex = maxIndex
        }
        pokeImg.src = spritesArr[imageIndex]
    })

    nextBtn.addEventListener('click', (evt) => {
        imageIndex++
        if(imageIndex > maxIndex){
            imageIndex = 0
        }
        pokeImg.src = spritesArr[imageIndex]
    })

    let statDiv = document.createElement('div')
    statDiv.classList.add('stat-div')
    for(let stat in statObj){
        let statContainer = document.createElement('span')
        statContainer.classList.add('stat-container')

        let statText = document.createElement('p')
        statText.textContent = stat.toUpperCase().replace('-','\n')
        statText.classList.add('stat')

        let statNum = document.createElement('p')
        statNum.textContent = statObj[stat]
        statNum.classList.add('stat')

        statContainer.appendChild(statNum)
        statContainer.appendChild(statText)
        statDiv.appendChild(statContainer)
    }

    imageDiv.appendChild(prevBtn)
    imageDiv.appendChild(pokeImg)
    imageDiv.appendChild(nextBtn)

    pokeDiv.appendChild(pokeName)
    pokeDiv.appendChild(pokeType)
    pokeDiv.appendChild(imageDiv)
    pokeDiv.appendChild(statDiv)
}


const getPokeData = evt => {
    evt.preventDefault()

    let pokemon = input.value.toLowerCase()
    axios.get(pokeURL + `/pokemon/${pokemon}`)
        .then(response => {
            console.log(response.data)
            let { name, sprites, types, stats } = response.data
            console.log(name)
            console.log(sprites)

            let spritesArr = []
            for(let key in sprites){
                if(typeof sprites[key] === "string"){
                    spritesArr.push(sprites[key])
                }
            }
            console.log(spritesArr)

            let typeStr = `type Pokemon`
            for(let i = 0; i < types.length; i++){
                let { name } = types[i].type
                typeStr = name[0].toUpperCase() + name.slice(1) + " " + typeStr
            }
            let statObj = {}
            for(let i = 0; i < stats.length; i++){
                let { base_stat } = stats[i]
                let { name } = stats[i].stat
                statObj[name] = base_stat
            }

            let pokeObj = {
                name,
                spritesArr,
                typeStr,
                statObj
            }

            createPokeDisplay(pokeObj)
        })
        .catch(err => console.log(err))
}



form.addEventListener('submit', getPokeData)