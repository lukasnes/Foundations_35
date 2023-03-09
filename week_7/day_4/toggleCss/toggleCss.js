const sidebarBtn = document.querySelector('#sidebar-btn')
const sidebar = document.querySelector('#sidebar')

const toggleWich = evt => {
    let { target } = evt
    console.log(target)
    while(target.id != 'sidebar-btn'){
        target = target.parentNode
    }
    target.classList.toggle('open')
    sidebar.classList.toggle('open')
}


sidebarBtn.addEventListener('click', toggleWich)