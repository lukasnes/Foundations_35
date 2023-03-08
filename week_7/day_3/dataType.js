class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null){
        this.head = head
    }
    size(){
        let count = 0
        let node = this.head

        while(node){
            count ++
            node = node.next
        }
        return count
    }
    loop(callBack){
        let node = this.head
        while(node){
            callBack(node)
            node = node.next
        }
    }
}

let myList = new LinkedList()

let one = new Node(1)
let two = new Node(2)
let three = new Node(3)
one.next = two
two.next = three
myList.head = one

let four = new Node(4)

two.next = four
four.next = three

// console.log(myList.head.next.data)
// console.log(myList.size())
myList.loop( (node)=>{
    node.data += 3
})