const body = document.querySelector('body')
const message = document.querySelector('#message')
console.log(message)
message.textContent = "Hello World"
const createHTML = () => {
    // const main = document.createElement('main')

    // const title = document.createElement('h1')
    // title.textContent = "Movie List"

    // const section = document.createElement('section')
    // const form = document.createElement('form')
    // const input = document.createElement('input')
    // input.placeholder = "Add Movie"
    // // input.setAttribute('placeholder',)
    // const button = document.createElement('button')
    // button.textContent = "Add"
    // form.appendChild(input)
    // form.appendChild(button)
    // section.appendChild(form)

    // const list = document.createElement('ul')

    // const aside = document.createElement('aside')
    // aside.id = "message"

    // main.appendChild(title)
    // main.appendChild(section)
    // main.appendChild(list)
    // main.appendChild(aside)

    // body.appendChild(main)
    let title = "Banana Phone"

    body.innerHTML = `
    <main>
        <h1>${title}</h1>
        <section>
            <form>
                <input placeholder="Add Movie" />
                <button>Add</button>
            </form>
        </section>
        <ul></ul>
        <aside id="message"></aside>
    </main>
    `
}

createHTML()

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(hideMessage, 1000)
}

const hideMessage = () => {
    message.classList.add('hide')
}