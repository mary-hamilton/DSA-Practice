class Queue {
    constructor(length){
        this.length = length
        this.array = new Array(length)
        this.headIndex = 0
        this.tailIndex = 0
    }

    enqueue(element){
        let newHeadIndex = (this.headIndex + 1) % this.length
        if (this.array[newHeadIndex] !== undefined){
            throw new Error("OVERFLOW!")
        }
        this.array[this.headIndex] = element
        this.headIndex = newHeadIndex

    }

    dequeue(){
        let elementToReturn = this.array[this.tailIndex]
        if (elementToReturn === undefined) {
            throw new Error("UNDERFLOWW!")
        }
        this.array[this.tailIndex] = undefined
        let newTailIndex = (this.tailIndex + 1) % this.length
        this.tailIndex = newTailIndex
        return elementToReturn
    }

    print(){
        for (let i = 0; i < this.length; i++) {
            console.log(this.array[i])
        }
    }
}