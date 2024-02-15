class Node {

    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue {

    constructor(){
        this.front = null
        this.back = null
    }

    enqueue(node) {
        if (!this.front) {
            this.front = node
            this.back = node
        } else {
            this.back.next = node
            this.back = node
        }
    }

    dequeue() {
        if (!this.front) {
            throw new Error("UNDERFLOW")
        }
        let nodeToReturn = this.front
        this.front = nodeToReturn.next
        nodeToReturn.next = null
        return nodeToReturn
    }

    print() {
        let currentNode = this.front
        console.log("*BEGIN*")
        while (currentNode) {
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
        console.log("*END*")
    }
}

let nodes = [new Node(3), new Node(4), new Node(7), new Node(-4), new Node(86)]
let myQueue = new Queue()
nodes.forEach(node => myQueue.enqueue(node))
myQueue.print()
myQueue.dequeue()
myQueue.dequeue()
myQueue.print()