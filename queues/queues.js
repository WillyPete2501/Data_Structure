class Queue {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }

    enqueue(element) {
        this.storage[this.tail] = element
        this.tail++
    }

    dequeue() {
        const removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }
}

const queue = new Queue()

//enqueue
queue.enqueue('seahorse')
queue.enqueue('dolphin')
queue.enqueue('whale shark')

console.log(queue)

//dequeue
queue.dequeue()

console.log(queue)