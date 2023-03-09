const colors = {
    white: "#FFFFFF",
    black: "#001A23",
    violet: "#7B6085",
    blue: "#306BAC",
    aquamarine: "#7AE7C7",
    green: "#0CCE6B",
    yellow: "#F8C630",
    orange: "#EF8218",
    red: "#A32235"
}
canvas.width = window.innerWidth - 80
canvas.height = window.innerHeight - 80
const context = canvas.getContext('2d')

let mouse = {
    x: undefined,
    y: undefined
}

// context.beginPath()
// context.strokeStyle = colors['white']
// context.moveTo(20,20)
// context.lineTo(200,200)
// context.lineTo(400,200)
// context.lineTo(600,800)
// context.stroke()
// context.beginPath()
// context.arc(630,800,30,0, 2 * Math.PI)
// context.fillStyle = colors['red']
// context.stroke()
// context.fill()

class Circle {
    constructor(xPosition, yPosition, radius, xVelocity, yVelocity) {
        this.xPosition = xPosition
        this.yPosition = yPosition

        this.radius = radius

        this.xVelocity = xVelocity
        this.yVelocity = yVelocity
    }

    draw = () => {
        context.beginPath()
        context.arc(this.xPosition, this.yPosition, this.radius, 0, 2 * Math.PI)
        context.fillStyle = colors['aquamarine']
        context.strokeStyle = colors['blue']
        context.stroke()
        context.fill()
    }

    update = () => {
        if(this.xPosition + this.radius > canvas.width || this.xPosition - this.radius < 0){
            this.xVelocity = -this.xVelocity
        }
        if(this.yPosition + this.radius > canvas.height || this.yPosition - this.radius < 0){
            this.yVelocity = -this.yVelocity
        }

        this.xPosition += this.xVelocity
        this.yPosition += this.yVelocity

        this.draw()
    }
}

class CircleNode {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    addToBack(value){
        let newCircle = value
        if(this.head === null){
            this.head = newCircle
            this.tail = newCircle
        } else {
            this.tail.next = newCircle
            this.tail = newCircle
        }
        return `Added a new circle ${newCircle} to the list.`
    }

    size() {
        let count = 0;
        let runner = this.head;
        while(runner){
            count++
            runner = runner.next
        }
        return count
    }

    removeFront(){
        if(this.head === null){
            return undefined
        }

        if(this.head === this.tail){
            let temp = this.head
            this.head = null
            this.tail = null
            return temp.value
        }

        let temp = this.head
        this.head = this.head.next
        temp.next = null
    }

    drawCircles(runner = this.head){
        if(runner === null){
            return
        }

        if(runner.next){
            runner.value.update()
            return this.drawCircles(runner.next)
        } else {
            runner.value.update()
            return
        }
    }

    removeExcess = () => {
        while(this.size() >= 200){
            this.removeFront()
        }
    }
}

let newNodeList = new SinglyLinkedList()

const createRandomCircle = (mouse,prevMouse) => {
    let { x: xOrigin, y: yOrigin } = prevMouse
    let { x: xPosition, y: yPosition } = mouse

    let radius = Math.ceil(Math.random() * 20) + 10
    let diameter = radius * 2

    let xDirection = xOrigin - xPosition
    let yDirection = yOrigin - yPosition

    let vector = Math.sqrt(xDirection**2 + yDirection**2)

    let xVelocity = (xDirection / vector) * 10
    let yVelocity = (yDirection / vector) * 10

    if(xPosition - diameter < 0){
        xPosition += diameter
    } else if(xPosition + diameter > canvas.width){
        xPosition -= diameter
    }

    if(yPosition - diameter < 0){
        yPosition += diameter
    } else if (yPosition + diameter > canvas.height){
        yPosition -= diameter
    }

    return newNodeList.addToBack(new CircleNode(new Circle(xPosition,yPosition,radius,xVelocity,yVelocity))) 
}

const mouseCircles = evt => {
    let prevMouse = {
        x: mouse.x,
        y: mouse.y
    }

    mouse.x = evt.x
    mouse.y = evt.y

    createRandomCircle(mouse,prevMouse)
}


const animate = () => {
    requestAnimationFrame(animate)
    context.clearRect(0,0,canvas.width,canvas.height)

    newNodeList.drawCircles()
    newNodeList.removeExcess()
    console.log(newNodeList.size())
}

animate()

canvas.addEventListener('mousemove', mouseCircles)