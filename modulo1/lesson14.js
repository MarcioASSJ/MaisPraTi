class Node{
    constructor(data){
        this.data= data
        this.next= null
    }
}

class LinkedList {
    constructor(){
        this.head= null
        this.size= 0
    }

    add(data){
        let newNode= new Node(data)

        if(this.head === null){
            this.head=newNode
        } else{
            let current = this.head
            while(current.next !==null){
                current=current.next
            }
            current.next=newNode
        }
        this.size++
    }


    insertAt(data, index){
        if (index< 0 || index >this.size){
            return console.log('Index fora dos limites')
        }

        let newNode= new Node(data)
        let current = this.head
        let previous

        if (index === 0){
            newNode.next = this.head
            this.head = newNode
        }else{
            for (let i=0; i<index; i++){
                previous=current
                current=current.next
            }

            newNode.next = current
            previous.next = newNode
        }
        this.size++
    }


    removeFrom(index){
        if (index< 0 || index >this.size){
            return console.log('Index fora dos limites')
        }

        let current = this.head
        let previous

        if(index===0){
            this.head = current.next
        }else{
            for(let i=0; i <index; i++){
                previous= current
                current=current.next
            }
            previous.next = current.next
        }
        this.size--
        return current.data
    }

    indexOf(data){
        let current = this.head
        let index = 0

        while(current !== null){
            if(current.data === data){
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    isempty(){
        return this.size === 0
    }

    sizeOfList(){
        return this.size
    }

    printlist(){
        let current= this.head
        while(current!==null){
            console.log(current.data)
            current=current.next
        }
    }
}

let list = new LinkedList()

list.add ("Formação +praTi")
list.add (true)
list.add ("elemento3")
list.insertAt("Novo elemento", 3)
list.printlist()

/* A diferença de uma lista e um array é que uma lista pode usar qualquer posição na 
memória e linkar ela na lista, já o array ele vai usar posições específicas e em ordem 
na memória*/