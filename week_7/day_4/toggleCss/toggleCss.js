const sidebarBtn = document.querySelector('#sidebar-btn')
const sidebar = document.querySelector('#sidebar')
const canvas = document.querySelector('canvas')

const toggleWich = evt => {
    let { target } = evt
    console.log(target)
    while(target.id != 'sidebar-btn'){
        target = target.parentNode
    }
    target.classList.toggle('open')
    sidebar.classList.toggle('open')
    canvas.classList.toggle('open')
    if(canvas.classList.contains('open')){
        canvas.width = window.innerWidth - 240
    } else {
        canvas.width = window.innerWidth - 80
    }
}


sidebarBtn.addEventListener('click', toggleWich)