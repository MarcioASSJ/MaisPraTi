class Node {
    constructor(data) {
    this.data = data
    this.next = null
    this.previous = null
    }
}

class DoublyLinkedList {
    constructor(){
    this.head = null
    this.tail= null
    this.size= 0
    }

    add(data){
    let newNode = new Node(data) 

    if(this.head === null){
        this.head = newNode
        this.tail= newNode
    } else {
        this.tail.next = newNode
        newNode.previous = this.tail
        this.tail = newNode
    }

    this.size++
    }

    insertAt(data, index){
        if (index < 0 || index > this.size){
            return console.log('Index fora dos limites!')
        }

        let newNode= new Node(data)
        let current= this.head

        if(index === 0){
            if(this.head === null){
                this.head = newNode
                this.tail= newNode
            }else{
                newNode.next = this.head
                this.head.previous = newNode
                this.head = newNode
            }
        }else if (index === this.size){
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        }else{
            for(let i=0; i<index; i++){
                current=current.next
            }

            newNode.next = current
            newNode.previous = current.previous

            current.previous.next = newNode
            current.previous = newNode
        }

        this.size++
    }

    removeAt(index){
        if(index < 0 || index >= this.size){
            return console.log("Index fora dos limites!")
        }
        
        let current = this.head
        
        if(index === 0){
            this.head = this.head.next
        
            if(this.head !== null){
                this.head.previous = null
            }else{
                this.tail = null
            }
        }else if (index === this.size -1){
            this.tail = this.tail.previous
            this.tail.next = null
        }else{
            for(let i=0; i<index; i++){
                current=current.next
            }

            current.previous.next = current.next
            current.next.previous = current.previous
        }

        this.size--
    }

    getData(index){
        if(index<0 || index>=this.size){
            return console.log("Index fora dos limites!")
        }

        let current = this.head

        for(let i=0; i<index; i++){
            current=current.next
        }

        return current.data
    }

    print(){
        let current = this.head
        let result = []

        while(current!==null){
            result.push(current.data)
            current = current.next
        }

        console.log(result.join(' <=> '))
    }

    getSize(){
        return this.size
    }

    getEmpty(){
        return this.size === 0
    }

    clear (){
        // Método para limpar a lista.
        this.head = null // Remove a cabeça.
        this.tail = null // Remove a cauda.
        this.size = 0 // Reseta o tamanho para 0.

        console.log ("Lista limpa") // Imprime mensagem de confirmação.
    }
}



let lista = new DoublyLinkedList ()
// Cria uma nova instância de uma lista duplamente encadeada.

lista.add(10) // Adiciona o valor 10 à lista.
lista.add(20) // Adiciona o valor 20 à lista.
lista.add(30) // Adiciona o valor 30 à lista.
lista.add(40) // Adiciona o valor 40 à lista.
lista.add(50) // Adiciona o valor 50 à lista.

lista.print() // Imprime a lista atual.

lista.insertAt(5, 0) // Insere o valor 5 na posição 0.
lista.insertAt(15, 3) // Insere o valor 15 na posição 3.
lista.insertAt(55, lista.getSize()) // Insere o valor 55 na última posição.
lista.print() // Imprime a lista após inserções.

lista.removeAt(0) // Remove o primeiro elemento.
lista.removeAt(3) // Remove o quarto elemento.
lista.removeAt(lista.getSize()) // Remove o último elemento.
lista.print() // Imprime a lista após remoções.

lista.removeAt(0) // Remove o primeiro elemento novamente.
lista.removeAt(3) // Tenta remover o quarto elemento (pode ser fora dos limites).
lista.removeAt(lista.getSize() - 1) // Remove o último elemento restante.
lista.print() // Imprime a lista após as remoções.

console.log("Elemento na posição 2: ", lista.getData(2)) // Exibe o dado na posição 2.
console.log("A lista esta vazia?", lista.getEmpty()) // Verifica se a lista está vazia.
console.log("Tamanho da lista?", lista.getSize()) // Exibe o tamanho atual da lista.

lista.clear() // Limpa a lista. 

lista.print() // Imprime a lista após a limpeza.

//teste mod 2
//teste git